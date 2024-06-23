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

[若用 ts 配置 webpack（_webpack.config.ts_）还需额外安装依赖，和做一些特殊配置](https://www.webpackjs.com/configuration/configuration-languages/#typescript)

<!--rehype:className=wrap-text -->

### 导出配置-静态多个(3.1.0 起支持)

<!--rehype:wrap-class=row-span-3-->

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
]
```

### 导出配置-动态多个(3.1.0 起支持)

<!--rehype:wrap-class=row-span-3-->

对于多 targets（如 AMD 和 CommonJS）构建 library 时会非常有用;

```js
module.exports = () => {
    return [
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
    ]
}
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
        ? {
              /**dev config */
          }
        : {
              /**pro config */
          }
}
```

## 配置

### root

<!--rehype:wrap-class=col-span-3-->

| name                                                             | default value                 | interface                      | description                                            |
| ---------------------------------------------------------------- | ----------------------------- | ------------------------------ | ------------------------------------------------------ |
| 名字                                                             | 默认值                        | 类型                           | 描述                                                   |
| mode                                                             | `none`                        | `'production'\|'development'`  | 模式                                                   |
| context                                                          | `path.resolve(process.cwd())` | `string`                       | 项目根目录                                             |
| [target](https://www.webpackjs.com/configuration/target/#target) | `browserslist \|\| web`       | `'node'\|'web'\|'commonjs'...` | 构建目标,告知 webpack 打包后的代码是用于在上面环境运行 |

### [entry](https://www.webpackjs.com/configuration/entry-context/#entry)<!--rehype:style=color: white;-->

<!--rehype:wrap-class=col-span-2-->

| name | default value | interface        | description                |
| ---- | ------------- | ---------------- | -------------------------- |
| 名字 | 默认值        | 类型             | 描述                       |
| name |               | `string\|object` | 入口文件(`.js\|.ts`)的名字 |

### [output](https://www.webpackjs.com/configuration/output/)<!--rehype:style=color: white;-->

<!--rehype:wrap-class=col-span-3-->

| name                      | default value | interface                               | description                                                                           |
| ------------------------- | ------------- | --------------------------------------- | ------------------------------------------------------------------------------------- |
| 名字                      | 默认值        | 类型                                    | 描述                                                                                  |
| assetModuleFilename       |               |                                         | [\*](https://www.webpackjs.com/guides/asset-modules/)                                 |
| asyncChunks               | `true`        | `boolean`                               | 创建按需加载的异步 chunk                                                              |
| output.charset            | `true`        | `boolean`                               | 为 html 的`<script>`标签添加 charset="utf-8" 标识                                     |
| output.chunkFilename      | `[id].js`     | `string\|(pathData, assetInfo)=>string` | chunk 文件的名称                                                                      |
| output.chunkFormat        |               |                                         | 和 target 一样的功能,有 target 时不用配置                                             |
| output.chunkLoadingGlobal |               | 自定义`string`                          | 用于指定当 webpack 为异步加载的 chunks 生成 JSONP 函数时所使用的全局变量名称,避免重名 |
| output.chunkLoadTimeout   | 120000        | `number`                                | 打包后的代码在运行的平台上加载某 chunk 超时；单位(`ms`)                               |

### [resolve](https://www.webpackjs.com/configuration/output/)<!--rehype:style=color: white;-->

<!--rehype:wrap-class=col-span-3-->

| name | default value | interface | description |
| ---- | ------------- | --------- | ----------- |
| 名字 | 默认值        | 类型      | 描述        |
