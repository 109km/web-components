# 介绍
基于`Polymer`的组件库。

# 立即开始

## 安装

1. 安装 `polymer-cli`
```
npm install -g polymer-cli
```

2. 安装npm依赖：
```
$ npm i
```
3. 启动开发
```
$ npm start
```
4. 访问 `http://127.0.0.1:8081/demo/`

## 构建

```
$ npm run build
```

## 测试

```
$ npm run test
```

## 开发步骤
1. 在`elements` 目录中加入要开发的组件目录，命名与现有的保持一致。
2. 参考 `ox-button` 的写法，将组件的css与js都写在同一个js文件中。
3. 公共样式加入 `elements/global.css` 文件中。
4. 在 `demo` 目录中创建组件的示例html文件。
5. 开发结束后，在根目录的 `index.js` 中 `import` 新开发的组件。
6. 如果需要构建项目，则执行构建命令。
7. `build/prod` 目录中的 `ox.min.css` 和 `ox.min.js` 就是最终需要引入的文件，可以在任意的项目中引入，然后就可以使用所有的组件了。

## 使用文档
组件详细文档请参考：
[API文档](api.md)


# 资料

[MDN Web components资料](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

[Google Web components资料](https://developers.google.com/web/fundamentals/)

[Polymer 官方文档](https://polymer-library.polymer-project.org/)

[基于Polymer的组件市场](https://www.webcomponents.org/)

[基于Polymer的App布局组件](https://github.com/PolymerElements/app-layout)

[Polymer新手启动项目](https://github.com/Polymer/polymer-starter-kit)