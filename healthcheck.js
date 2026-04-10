"use strict";

const http = require("node:http");

const TIMEOUT_MS = 3000;

const req = http.get("http://127.0.0.1:8080/", (res) => {
  // Drain response data so the socket can close cleanly
  res.resume();

  const healthy = res.statusCode >= 200 && res.statusCode < 400;
  process.exit(healthy ? 0 : 1);
});

req.setTimeout(TIMEOUT_MS, () => {
  req.destroy();
  process.exit(1);
});

req.on("error", () => process.exit(1));
