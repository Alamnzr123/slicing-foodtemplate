# Frontend Docker instructions

This project includes a Dockerfile and a sample docker-compose.yml to build a production-ready static image served by nginx.

Key points:

- The frontend reads the API base URL at build time from REACT_APP_BACKEND_URL (also embedded into the built static files). At runtime the built JS will attempt to call that URL.
  -- On Windows, if your backend runs on the host, prefer pointing the frontend at the API gateway using plain HTTP (for example http://localhost:4000/api) unless you've configured TLS on the backend and the container trusts the certificate.

Build and run with docker-compose (recommended):

```powershell
# Build and run, pointing the frontend at a backend running on the host
docker-compose up --build -d

# Or explicitly set the backend URL to the gateway (http)
$env:REACT_APP_BACKEND_URL = 'http://localhost:4000/api'; docker-compose up --build -d
```

Build only with docker:

```powershell
docker build --build-arg REACT_APP_BACKEND_URL=http://localhost:4000/api -t slicing-foodtemplate-frontend:local .
docker run -p 3000:80 slicing-foodtemplate-frontend:local
```

Notes about HTTPS/CORS:

- If your backend uses HTTPS with a self-signed certificate on localhost, the browser (not Docker) will block requests unless the certificate is trusted by your OS/browser. For development, either use a valid TLS cert, or run the backend with HTTP, or add the certificate to your OS/browser trust store.
- CORS must be enabled on the backend to allow requests from the frontend origin (http://localhost:3000 when running locally, or http://localhost when using the nginx container on port 3000 mapping to port 80). Configure appropriate Access-Control-Allow-\* headers on the backend.
