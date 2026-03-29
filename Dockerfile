FROM node:14.21.3

# make the 'app' folder the current working directory
WORKDIR /app

# Use bash with pipefail for piped RUN commands.
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Install rustup
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain 1.73.0

# Export rust bin path
ENV PATH="/root/.cargo/bin:${PATH}"

# Install rust-wasm
RUN PATH="root/.cargo/bin:$PATH" curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -y --default-toolchain 1.73.0

WORKDIR /app/registration-challenge

# copy registration-challenge files
COPY registration-challenge/ .

# run test of registration-challenge and build registration-challenge wasm
RUN cargo test \
	&& wasm-pack build

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json", "./"]

# install simple http server and project dependencies
RUN npm install -g http-server@14.1.1 \
	&& npm ci

# copy website files and folders to the current working directory
COPY website/ .

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
