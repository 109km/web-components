# API文档

### 防闪动
为防止渲染过程中出现闪动，请在`body`标签上加入`ox-cloak`这个属性，作用与vue的`v-cloak`是相同的。

#### 闪动原因
使用web-components之后，所有的自定义标签的代码都是通过js代码定义的，因此要先加载js文件，相应的自定义标签才能生效。通常为了使页面加载速度更快，大家都会习惯在页面最后引入`script`外链，因此在js文件加载完成之前，浏览器并不知道这些自定义标签到底应该如何渲染，所以中间会有一个短暂的时间空挡期。

#### 解决原理
`ox-cloak`属性其实是设置了css属性为`opacity:0` ，这样使得整个页面在JS代码加载好之前保持看不见的状态，等JS加载完成之后，通过js代码移除这个属性。

#### 为什么使用`opacity:0`而没有使用 `display:none` 或者 `visiblity:hidden`  ?
1.`display:none` 会导致相应的DOM元素根本不会被渲染，并且不会计算该元素下所占位置，所以在重新被 `display:block`之后，浏览器要重新计算整个页面的布局，然后再渲染。

2.`visibility:hidden` 子元素的同属性能够覆盖父元素的，所以很可能某些子元素单独被展示了出来。

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

### ox-pagination
| 属性  | 说明 | 类型 | 默认值 |
| :---: | ---- |:--:|:--:|
| background | 设置是分页按钮背景色 | String | #d59e5b
| total | 总条目数 | `number` 
| page | 当前页面 | `number` | 1
| default-page | 默认的当前页数 | `number` | 1
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


### ox-bubble

| 属性  | 说明 | 类型 | 默认值 | 必须 |
| :---: | ---- |:--:|:--:|:--:|
| type | 设置弹出气泡的方向，可选值为 `left` , `right` , `top` , `bottom` | `String` |  | `Y` |
| ox-class | 类名，自定义 CSS 样式 | `String` |  | `N` |
| triangle-color | 设置气泡箭头颜色 | `String` | `#333333` | `N` |
| title | 设置弹出气泡标题 | `String` |  | `N` |



### ox-cheackbox

| 属性  | 说明 | 类型 | 默认值 | 必须 |
| :---: | ---- |:--:|:--:|:--:|
| cheacked | checked 属性规定在页面加载时应该被预先选定的 input 元素。 | `String` |  | `N` |
| disabled | disabled 属性规定禁用按钮。被禁用的按钮既不可用，也不可点击。 | `String` |  | `N` |
| group | 组别 | `String` |  | `Y` |
| value | 选项值 | `String` |  | `Y` |



### ox-switch

| 属性  | 说明 | 类型 | 默认值 |
| :---: | :----: |:--:|:--:|
| checked | 开关是否打开状态 | `Boolean` | `false` |
| disabled | 开关失效状态 | `Boolean` | `false` |
| onClick | 点击按钮时的回调 | `(event) => void` |  |



### ox-radio

| 属性  | 说明 | 类型 | 默认值 |
| :---: | :----: |:--:|:--:|
| group | 组别 | `String` |  |
| disabled | 按钮失效状态 | `Boolean` | `false` |
| value | 选项值 | `String` |  |  |
| onClick | 点击按钮时的回调 | `(event) => void` |  |


### ox-input

| 属性 | 说明 | 类型 | 默认值 |
| :--: | --- | :--: | :--: |
| type | 设置按钮类型，选值为`text`,`prohibit`,`tel`,`email`,`url`,`search` | `String` | `text` |
| disabled | 输入框禁用状态 | `Boolean` | `false`|
| placeholder | 输入框内的描述信息 | `String` |
| fontsize | 输入框文本字体大小 | `String` |
| color | 输入框文本颜色 | `String` |
| cursorcolor | 输入框光标颜色 | `String` |
| onBlur | 文本框失去焦点时的回调 | `(event) => void` |

