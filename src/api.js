import axios from "axios";

// Centralized axios instance using the environment variable.
// If REACT_APP_BACKEND_URL is not set or points to a Docker internal hostname
// (for example 'http://app:3001'), fall back at runtime to the host that
// served the frontend (typically http(s)://localhost:3001 when you browse
// from your dev machine). This avoids net::ERR_NAME_NOT_RESOLVED in the
// browser when the built bundle was created pointing to an internal Docker
// network name.
const runtimeDefaultBackend = (() => {
  try {
    if (typeof window !== "undefined" && window.location) {
      // Use plain http for local backend by default. If you need https for the
      // backend, set REACT_APP_BACKEND_URL explicitly to an https URL at build time.
      const host = window.location.hostname || "localhost";
      return `http://${host}:3001`;
    }
  } catch (e) {
    // fallback
  }
  return "http://localhost:3001";
})();

const rawBase = process.env.REACT_APP_BACKEND_URL;
const resolvedBase = (() => {
  if (!rawBase) return runtimeDefaultBackend;
  // if rawBase contains a hostname without a dot (likely a docker service name)
  // and does not look like localhost, prefer runtimeDefaultBackend for browser
  // clients.
  try {
    const url = new URL(rawBase);
    const hostname = url.hostname;
    if (hostname && hostname.indexOf(".") === -1 && hostname !== "localhost") {
      return runtimeDefaultBackend;
    }
    return rawBase;
  } catch (e) {
    return rawBase;
  }
})();

const api = axios.create({
  baseURL: resolvedBase,
  headers: {
    "Content-Type": "application/json",
  },
});

// helpful debug: show what baseURL the client resolved at runtime
if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-console
  console.info('[api] resolved backend baseURL =', resolvedBase);
}

// Request interceptor: attach token automatically
api.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = config.headers || {};
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (err) {
      // ignore
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: on 401, clear token and redirect to login
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err && err.response && err.response.status === 401) {
      try {
        localStorage.removeItem("token");
        // if running in browser, force redirect
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      } catch (e) {
        // ignore
      }
    }
    return Promise.reject(err);
  }
);

export function authHeaders() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export default api;

export function assetUrl(path) {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) path = "/" + path;
  return `${process.env.REACT_APP_BACKEND_URL}${path}`;
}
