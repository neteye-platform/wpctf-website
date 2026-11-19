FROM node:14.21.3 AS build_image

# make the 'app' folder the current working directory
WORKDIR /app

# Use bash with pipefail for piped RUN commands.
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Install rustup
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain 1.82.0

# Export rust bin path
ENV PATH="/root/.cargo/bin:${PATH}"

# Install rust-wasm
RUN PATH="root/.cargo/bin:$PATH" curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -y --default-toolchain 1.82.0

WORKDIR /app/registration-challenge

# copy registration-challenge files
COPY registration-challenge/ .

# run test of registration-challenge and build registration-challenge wasm
RUN cargo test \
	&& wasm-pack build

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

FROM quay.io/nginx/nginx-unprivileged:1.31.9-alpine@sha256:60214a103e6f38e953ff957f34b1f2e97a9db801ab2df3821da955d0fe6cadd6

COPY --from=build_image /app/website/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD ["/bin/sh", "-c", "wget -q --spider http://127.0.0.1:8080/ || exit 1"]

USER 101

CMD ["nginx", "-g", "daemon off;"]
