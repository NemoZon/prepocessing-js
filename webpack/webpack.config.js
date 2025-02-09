const path = require("path");
const fs = require("fs");

module.exports = {
  entry: "../index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./webpack/dist"),
  },
  mode: "production",
  stats: "errors-only",
};

fs.readFile("./webpack/dist/bundle.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
