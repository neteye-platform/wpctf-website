FROM node:25.9.0@sha256:3953ec6a2c10154a58ccf4ba48083ddfe3f8641d63f0d1d5cb8a4a78169123a7 AS build_image

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM node:25.9.0@sha256:3953ec6a2c10154a58ccf4ba48083ddfe3f8641d63f0d1d5cb8a4a78169123a7

WORKDIR /app/website/

COPY --from=build_image /app/website/dist ./dist
COPY healthcheck.js .

# install simple http server for serving static content
RUN npm install -g http-server@14.1.1

USER node

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD ["node", "healthcheck.js"]

CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
