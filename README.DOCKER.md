Frontend Docker quick guide (Windows PowerShell)

This file shows the recommended commands to build and run the frontend Docker image and docker-compose using PowerShell.

Why these commands

-- The frontend embeds REACT_APP_BACKEND_URL at build time. Use the gateway URL (http://localhost:4000/api when backend runs on host and gateway listens on 4000) to avoid TLS mismatch errors when browsing from your host machine.

- Avoid copying local `.env` files into the Docker image; local .env files can create recursive dotenv-expand interpolation during `npm run build` and crash the build.

Build the frontend image (PowerShell)

```powershell
# from f:\slicing-fullstack\slicing-foodtemplate
# set the build-time env var (PowerShell syntax) and run the PowerShell-specific npm script
$env:REACT_APP_BACKEND_URL = 'http://localhost:4000/api'
npm run docker:build:ps
```

Run the image locally

```powershell
# run the built image mapped to port 3000
npm run docker:run
```

Use docker-compose (recommended)

```powershell
# Build and run the frontend via docker-compose
npm run docker:compose:up

# To stop and remove containers
npm run docker:compose:down
```

Troubleshooting

- If the Docker build fails during `npm run build` with errors from `dotenv-expand` (RangeError: Maximum call stack size exceeded), ensure you don't have a local `.env` or `.env.*` file that contains self-referential variables. The Dockerfile removes `.env` files inside the image and a `.dockerignore` is present to exclude them from the build context.
- If your backend uses HTTPS and self-signed certs, either configure the backend with a valid certificate or serve backend over HTTP for local development, or import the cert into your OS/browser trust store.
  -- After starting the frontend, open http://localhost:3000 and check the browser console for a line like: `[api] resolved backend baseURL = http://localhost:4000/api`.

If you want I can also add a health-check endpoint and a small status page in the frontend build to confirm connectivity to the gateway during runtime.
