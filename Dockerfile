FROM node:26.7.0@sha256:40fd8249a701dab7431d15074ac4cf4f1c18eecd713807599cd76a7a6caad48b AS build_image

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.31-alpine@sha256:901e944d1f4fc2bd077e8f5568b98c1f6f8cdacf6b97a87747c43134a339b9a7

COPY --from=build_image /app/website/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD ["/bin/sh", "-c", "wget -q --spider http://127.0.0.1:8080/ || exit 1"]


USER 101

CMD ["nginx", "-g", "daemon off;"]
