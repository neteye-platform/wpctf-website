FROM node:25.1.0 AS BUILD_IMAGE

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM node:25.1.0

WORKDIR /app/website/

COPY --from=BUILD_IMAGE /app/website/dist ./dist

# install simple http server for serving static content
RUN npm install -g http-server@14.1.1

USER node

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
