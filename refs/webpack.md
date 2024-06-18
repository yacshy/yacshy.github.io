# webpack

[中文官网地址](https://www.webpackjs.com/concepts/)

## 前置

### 启动配置

#### install

```js
npx webpack init
```

#### package.json

```json
"script": {
    "build": "webpack config prod.config.js"
}
```

[若用ts配置webpack（*webpack.config.ts*）还需额外安装依赖，和做一些特殊配置](https://www.webpackjs.com/configuration/configuration-languages/#typescript)

## 基础配置

### 导出配置项

* 静态单个

```js
module.exports = {
    // ....
}
```

* 动态单个

```js
module.exports = () => {
    return process.env.NODE_ENV === 'development'
        ? { /**dev config */ } 
        : { /**pro config */ }
}
```

* 静/动态多个(3.1.0起支持) 对于多 targets（如 AMD 和 CommonJS）构建 library 时会非常有用;

```js
module.exports = [
  {
    output: {
      filename: './dist-amd.js',
      libraryTarget: 'amd',
    },
    name: 'amd',
    entry: './app.js',
    mode: 'production',
  },
  {
    output: {
      filename: './dist-commonjs.js',
      libraryTarget: 'commonjs',
    },
    name: 'commonjs',
    entry: './app.js',
    mode: 'production',
  },
];
```

### 配置参数表

#### context

|param|default|description|
|---|---|---|
|mode||模式|
|context|`path.resolve(cwd())`|根目录|

#### output

|param|description|
|---|---|
|||
