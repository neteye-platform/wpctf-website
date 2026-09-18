FROM node:26.8.2@sha256:fb192b8ad31841aadc4bb79c44ae0f59d193a798ffbc9fdce37ba6ecb20c2236 AS build_image

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.31-alpine@sha256:b54ac358b83fc6c965793fd271839b4ea4cdb6e99895bb19618cbc2ca152d972

COPY --from=build_image /app/website/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD ["/bin/sh", "-c", "wget -q --spider http://127.0.0.1:8080/ || exit 1"]


USER 101

CMD ["nginx", "-g", "daemon off;"]
