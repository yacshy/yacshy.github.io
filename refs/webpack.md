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
<!--rehype:className=wrap-text -->

### 导出配置-静/动态多个(3.1.0起支持)
<!--rehype:wrap-class=col-span-2 row-span-3-->

对于多 targets（如 AMD 和 CommonJS）构建 library 时会非常有用;

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

### 导出配置-静态单个

```js
module.exports = {
    // ....
}
```

### 导出配置-动态单个

```js
module.exports = () => {
    return process.env.NODE_ENV === 'development'
        ? { /**dev config */ } 
        : { /**pro config */ }
}
```

## 配置

### 配置项注解
<!--rehype:wrap-class=col-span-3-->

|name|default value|interface|description|
|---|---|---|---|
|名字|默认值|类型|描述|
|mode|`none`|`'production'\|'development'`|模式|
|context|`path.resolve(process.cwd())`|`string`|项目根目录|
|[target](https://www.webpackjs.com/configuration/target/#target)|`browserslist \|\| web`|`'node'\|'web'\|'commonjs'...`|构建目标,告知webpack打包后的代码是用于在上面环境运行|
|[entry](https://www.webpackjs.com/configuration/entry-context/#entry)||`function\|object`|入口|
|entry.name||`string\|object`|入口文件(`.js\|.ts`)的名字|
|[output](https://www.webpackjs.com/configuration/output/)|||出口|
|output.assetModuleFilename|||[*](https://www.webpackjs.com/guides/asset-modules/)|
|output.asyncChunks|`true`|`boolean`|创建按需加载的异步chunk|
|output.charset|`true`|`boolean`|为html的`<script>`标签添加 charset="utf-8" 标识|
|output.chunkFilename|`[id].js`|`string\|(pathData, assetInfo)=>string`|chunk文件的名称|
|output.chunkFormat|||和target一样的功能,有target时不用配置|
|output.chunkLoadingGlobal||自定义`string`|用于指定当webpack为异步加载的chunks生成JSONP函数时所使用的全局变量名称,避免重名|
|output.chunkLoadTimeout|120000|`number`|打包后的代码在运行的平台上加载某chunk超时；单位(`ms`)|

