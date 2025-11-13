# Frontend Docker instructions

This project includes a Dockerfile and a sample docker-compose.yml to build a production-ready static image served by nginx.

Key points:

- The frontend reads the API base URL at build time from REACT_APP_BACKEND_URL (also embedded into the built static files). At runtime the built JS will attempt to call that URL.
- On Windows, if your backend runs on the host (e.g. https://localhost:3001), use https://host.docker.internal:3001 as the backend URL when running the container so the container can reach the host.

Build and run with docker-compose (recommended):

```powershell
# Build and run, pointing the frontend at a backend running on the host
docker-compose up --build -d

# Or explicitly set the backend URL
$env:REACT_APP_BACKEND_URL = 'https://host.docker.internal:3001'; docker-compose up --build -d
```

Build only with docker:

```powershell
docker build --build-arg REACT_APP_BACKEND_URL=https://host.docker.internal:3001 -t slicing-foodtemplate-frontend:local .
docker run -p 3000:80 slicing-foodtemplate-frontend:local
```

Notes about HTTPS/CORS:

- If your backend uses HTTPS with a self-signed certificate on localhost, the browser (not Docker) will block requests unless the certificate is trusted by your OS/browser. For development, either use a valid TLS cert, or run the backend with HTTP, or add the certificate to your OS/browser trust store.
- CORS must be enabled on the backend to allow requests from the frontend origin (http://localhost:3000 when running locally, or http://localhost when using the nginx container on port 3000 mapping to port 80). Configure appropriate Access-Control-Allow-\* headers on the backend.
