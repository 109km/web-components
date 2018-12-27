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


### ox-menu
| 属性 | 说明 | 类型 | 默认值 |
| :--: | --- | :--: | :--: |
| background-color | 菜单的背景色（仅支持 hex 格式） | `String`| #ffffff |
| text-color | 菜单的文字颜色（仅支持 hex 格式 | `String` | #333333
| disabled | 是否禁用	| `Boolean` | false

