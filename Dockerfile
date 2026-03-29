FROM node:20.11.1 AS BUILD_IMAGE

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
RUN cargo test \
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

FROM node:20.11.1

WORKDIR /app/website/

COPY --from=BUILD_IMAGE /app/website/dist ./dist

# install simple http server for serving static content
RUN npm install -g http-server@14.1.1

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]
