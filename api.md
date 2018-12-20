# API文档

### ox-button


| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| type | 设置按钮类型，可选值为 `default` , `primary` , `text` , `success` , `warning` , `error` , `success-hollow` , `warning-hollow` , `error-hollow` | `String` | `default` |
| disabled | 按钮失效状态 | `Boolean` | `false` |
| href | 跳转链接，与`a`标签的属性相同 | `String` | |
| target | 链接打开方式，与`a`标签的属性相同，在有`href`属性时生效 | `String` | |
| block | 将按钮宽度调整为其父宽度的选项 | `Boolean` | `false` |
| onClick | 点击按钮时的回调 | `(event) => void` |  |
| onHover | 鼠标悬浮在按钮上时的回调，触发事件为`mouseover` | `(event) => void` |  |

### ox-pagination


| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| background | 设置是分页按钮背景色 | String | #d59e5b
| total | 总条目数 | `number` 
| default-page | 当前页数 | `number` | 1
| onOk | 分页事件 |`(event) => void`


### ox-tabs

| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| type |tab类型 可选值为 `slide`,`piece`|`String`|`slide`
| created |tab渲染结束后的方法|`(event) => void`|


### ox-tab-pane

| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| label |选项卡内容|`String`|
| oxtarget |对应区域的`ID`|`String`|


### ox-tab-card

| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| oxcard | 对应tab的`ID` |`String`|


### ox-tag

| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| type |tag类型 可选值为 `default`,`delete`|`String`|`default` 
| delete |tag 删除事件回调|`(event) => void`|
