FROM node:20.11.1 AS BUILD_IMAGE

# make the 'app' folder the current working directory
WORKDIR /app

# Install rustup
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs  | sh -s -- -y

# Export rust bin path
ENV PATH="/root/.cargo/bin:${PATH}"

# Install rust-wasm
RUN cargo install wasm-pack

WORKDIR /app/registration-challenge

# copy registration-challenge files
COPY registration-challenge/ .

# run test of registration-challenge
RUN cargo test

# build registration-challenge wasm
RUN wasm-pack build --target=web --out-name=zzc3IJDtB2kn5FMWa

WORKDIR /app/website

COPY ["website/package.json", "website/package-lock.json*", "./"]

# install project dependencies
RUN npm ci

# copy website files and folders to the current working directory
COPY website/ .

# Copy wasm files as static files in the website folder
RUN cp -a /app/registration-challenge/pkg/zzc3IJDtB2kn5FMWa.js /app/website/public/js/
RUN cp -a /app/registration-challenge/pkg/zzc3IJDtB2kn5FMWa_bg.wasm /app/website/public/js/

# build app for production with minification
RUN npm run build

FROM node:20.11.1

WORKDIR /app/website/

COPY --from=BUILD_IMAGE /app/website/dist ./dist

RUN ls -la

# install simple http server for serving static content
RUN npm install -g http-server

EXPOSE 8080
CMD [ "http-server", "dist", "--proxy", "http://localhost:8080?" ]