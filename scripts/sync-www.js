const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dest = path.join(root, "www");

function copy(src, to) {
  const from = path.join(root, src);
  if (!fs.existsSync(from)) return;
  fs.cpSync(from, path.join(dest, to || src), { recursive: true });
}

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
[
  "index.html",
  "ads-config.js",
  "privacy.html",
  "favicon.svg",
  "manifest.webmanifest",
].forEach((f) => copy(f));
copy("vendor", "vendor");
copy("assets", "assets");
console.log("www ready");
