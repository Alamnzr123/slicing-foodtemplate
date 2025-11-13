## Build stage
FROM node:16-alpine as build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent || npm install --silent
COPY . .
ARG REACT_APP_BACKEND_URL=http://localhost:4000/api
# Ensure any local .env files (which may contain recursive references) are removed
# from the image before running the CRA build. Many developers keep .env locally and
# those files can trigger dotenv-expand recursion during the build when they
# contain self-referential entries.
RUN rm -f .env .env.* || true
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
RUN npm run build

## Production stage
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
