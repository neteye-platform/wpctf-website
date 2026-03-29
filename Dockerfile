FROM node:25.1.0@sha256:0b1fad950f54a1d6f9e8e580205c157b43315d2c4231c3a0b78137d87fb928fa AS BUILD_IMAGE

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM node:25.1.0@sha256:0b1fad950f54a1d6f9e8e580205c157b43315d2c4231c3a0b78137d87fb928fa

WORKDIR /app/website/

COPY --from=BUILD_IMAGE /app/website/dist ./dist

# install simple http server for serving static content
RUN npm install -g http-server@14.1.1

USER node

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
