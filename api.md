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


### ox-modal  props


| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| type | 设置对话框类型，可选值为 `basic`, `success` , `warning` , `error` | `String` | `success` |
| for | 与页面元素id进行绑定 | `String` |  |
| title | 对话框标题 | `String` | |
| oktext | 确定按钮文字 | `String` | `确定`|
| canceltext | 取消按钮文字 | `String` | `取消` |
| maskcloseable | 是否允许点击遮罩层关闭 | `Boolean` |  `true`|
| animationtype | 设置对话框动画类型，可选值为`animate-bottom`, `animate-top` , `animate-left` , `animate-right`, `animate-fade` | `String` |  |


### ox-modal  events


| 事件名  | 说明 | 返回值 | 
| :---: | ---- |:--:|
| show | 点击确定的回调 | `无` | 
| hide | 点击取消的回调 | `无` | 

### ox-modal  slot


| 名称  | 说明 | 
| :---: | ---- |
| icon |  | 对话框图标可根据需要在`font awesome`中进行选择 | 
| content | 对话框描述文字 | 

### ox-modal  instance


| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| success | 可通过`modal.success(config,onok,oncancel)`直接调用，config为对象,onok是点击确定的回调，oncanel是点击取消的回调|  |  |
| warning | 可通过`modal.warning(config,onok,oncancel)`直接调用|  |  |
| error | 可通过`modal.error(config,onok,oncancel)`直接调用|  |  |
| basic | 可通过`modal.basic(config,onok,oncancel)`直接调用|  |  |
| customType | 可通过`modal.customType(config,icon,color,onok,oncancel)`直接调用，icon为自定义图标名字，color是自定义图标颜色|  |  |
|  | `config`配置如下|  |  |
| title | 对话框标题 | `String` | |
| oktext | 确定按钮文字 | `String` | `确定`|
| canceltext | 取消按钮文字 | `String` | `取消` |
| animationtype | 设置对话框动画类型，可选值为`animate-bottom`, `animate-top` , `animate-left` , `animate-right`, `animate-fade` | `String` |  |
