FROM node:25.8.2@sha256:ccfc02deb6abb1b70b6ef21d3d93b3f671c0de6f463ff331cf0ea0a28ad875c9 AS build_image

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM node:25.8.2@sha256:ccfc02deb6abb1b70b6ef21d3d93b3f671c0de6f463ff331cf0ea0a28ad875c9

WORKDIR /app/website/

COPY --from=build_image /app/website/dist ./dist

# install simple http server for serving static content
RUN npm install -g http-server@14.1.1

USER node

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
