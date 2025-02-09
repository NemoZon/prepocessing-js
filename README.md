# Preprocessing Project

## 📌 Description
This project demonstrates the use of various JavaScript preprocessors, including:
- [esbuild](https://esbuild.github.io/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [TypeScript](https://www.typescriptlang.org/)

Each of these compiles or transpiles code into more compatible JavaScript.

---

## 📦 Installation
Before starting, install all dependencies:
```sh
npm install
```

---

## 🚀 Commands

### 1️⃣ **esbuild**
Build using [esbuild](https://esbuild.github.io/):
```sh
npm run esbuild
```
Build and run the compiled file:
```sh
npm run esbuild:run
```

### 2️⃣ **Webpack**
Compile using [Webpack](https://webpack.js.org/):
```sh
npm run webpack
```
Build and run the compiled file:
```sh
npm run webpack:run
```

### 3️⃣ **Babel**
Transpile code with [Babel](https://babeljs.io/):
```sh
npm run babel
```
Transpile and run:
```sh
npm run babel:run
```

### 4️⃣ **TypeScript**
Compile TypeScript code:
```sh
npm run typescript
```
Compile and run:
```sh
npm run typescript:run
```

---

## 📂 Project Structure
```
preprocessing/
│   package.json
│   README.md
│   index.js
|   index.ts
│
├── esbuild/
│   ├── build.js
│   ├── dist/
│
├── webpack/
│   ├── webpack.config.js
│   ├── dist/
│
├── babel/
│   ├── .babelrc
│   ├── dist/
│
└── typescript/
    ├── tsconfig.json
    ├──webpack
        ├── dist/
```

---

## 🛠 Requirements
- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

---

## 📖 License
This project is licensed under the **ISC** license.

