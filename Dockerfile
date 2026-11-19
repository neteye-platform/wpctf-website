FROM node:20.11.1 AS build_image

# make the 'app' folder the current working directory
WORKDIR /app

# Set SHELL to ensure pipefail is used
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Install rustup
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Export rust bin path and install rust-wasm
ENV PATH="/root/.cargo/bin:${PATH}"
RUN cargo install wasm-pack

WORKDIR /app/registration-challenge

# copy registration-challenge files
COPY registration-challenge/ .

# run test of registration-challenge and build wasm artifact
# (one thread: the tests share the LOGGED_IN static)
RUN cargo test -- --test-threads=1 \
	&& wasm-pack build --target=web --out-name=zzc3IJDtB2kn5FMWa

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# Copy wasm files as static files in the website folder and build app for production
RUN cp -a /app/registration-challenge/pkg/zzc3IJDtB2kn5FMWa.js /app/website/public/js/ \
	&& cp -a /app/registration-challenge/pkg/zzc3IJDtB2kn5FMWa_bg.wasm /app/website/public/js/ \
	&& npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY --from=build_image /app/website/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD ["/bin/sh", "-c", "wget -q --spider http://127.0.0.1:8080/ || exit 1"]

USER 101

CMD ["nginx", "-g", "daemon off;"]
