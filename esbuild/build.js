const esbuild = require("esbuild");
const fs = require("fs");

esbuild.buildSync({
  entryPoints: ["index.js"],
  outfile: "./esbuild/dist/script.js",
  bundle: true, // Объединяет зависимости
  minify: true, // Сжимает код
  platform: "node", // Делает код совместимым с Node.js
});

fs.readFile("./esbuild/dist/script.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
