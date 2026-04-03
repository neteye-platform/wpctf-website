FROM node:25.9.0@sha256:bcc74cb249480aa783f629ca82645dc3fe3edb1c3f0919fa4d046363163b876a AS build_image

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM node:25.9.0@sha256:bcc74cb249480aa783f629ca82645dc3fe3edb1c3f0919fa4d046363163b876a

WORKDIR /app/website/

COPY --from=build_image /app/website/dist ./dist

# install simple http server for serving static content
RUN npm install -g http-server@14.1.1

USER node

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
