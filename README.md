# 介绍

基于 `Polymer` 的PC组件库。

# 立即开始
按顺序执行以下命令：

```javascript
// 安装命令
npm i

// 启动开发
npm start

```

## 开发步骤
1. 在`elements` 目录中加入要开发的组件目录，命名与现有的保持一致。
2. 参考 `ox-button` 的写法，将组件的css与js都写在同一个js文件中。
3. 公共样式加入 `elements/global.css` 文件中。
4. 在 `demo` 目录中创建组件的示例html文件。
5. 开发结束后，在根目录的 `index.js` 中 `import` 新开发的组件。
6. 如果需要构建项目，则执行构建命令。
7. `build/prod` 目录中的 `ox.min.css` 和 `ox.min.js` 就是最终需要引入的文件，可以在任意的项目中引入，然后就可以使用所有的组件了。


## 构建上线

```javascript

npm run build

```


