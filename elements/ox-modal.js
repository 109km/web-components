import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-modal
 */
class OXModal extends PolymerElement {
    constructor() {
        super();
        // this.addEventListener('click', this.onClick);
        this.title = '成功反馈标题';
        // this.cancelText = '次要操作';
        // this.okText = '主要操作';

    }
    // @import '../elements/ox-modal-liuhao/ox-modal-liuhao.css';
    static get template() {
        return html `
    <style>
    :host {
    display: none;
}

:host([visible]) {
    display: block;
}

.clearfix:after {
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
    font-size: 0;
    height: 0;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.ox-modal-outer {
    z-index: 999;
}

.ox-modal-inner {
    width: 320px;
    /*height: 315px;*/
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 0 15px 36px;
    box-shadow: 0 0 10px #aaa;
}

.ox-modal-mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
}

.title {
    font-size: 20px;
    font-weight: 600;
}

::slotted(.content) {
    font-size: 18px;
    margin-top: 20px;
    color: #a1a1a1;
}

.ox-modal-btn-wrap {
    width: 226px;
    margin: 30px auto 0;
    color: var(--color-black);
}

.ox-modal-cancel {
    width: 100px;
    height: 36px;
    line-height: 36px;
    border: .5px solid #ccc;
    cursor: pointer;
}

.ox-modal-ok {
    width: 100px;
    height: 36px;
    line-height: 36px;
    background-color: var(--theme-color-success);
    color: var(--color-white);
    cursor: pointer;
}

::slotted(.icon-area) {
    text-align: center;
    font-size: 64px;
    color: var(--theme-color-success);
    margin: 30px 0 0;
}

.ox-modal-outer-warning ::slotted(.icon-area) {
    color: var(--theme-color-warning);
}

.ox-modal-outer-error ::slotted(.icon-area) {
    color: var(--theme-color-error);
}

.animate-fade {
    animation: animate-fade .5s ease-in-out;
}

.animate-left {
    animation: animate-left .5s ease-in-out;
}

.animate-right {
    animation: animate-right .5s ease-in-out;
}

.animate-top {
    animation: animate-top .5s ease-in-out;
}

.animate-bottom {
    animation: animate-bottom .5s ease-in-out;
}

@-webkit-keyframes animate-fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
@-moz-keyframes animate-fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
@keyframes animate-fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
@-webkit-keyframes animate-left {
    0% {
        left: -1000px;
    }

    100% {
        left: 50%;
    }
}
@-moz-keyframes animate-left {
    0% {
        left: -1000px;
    }

    100% {
        left: 50%;
    }
}
@keyframes animate-left {
    0% {
        left: -1000px;
    }

    100% {
        left: 50%;
    }
}
@-webkit-keyframes animate-right {
    0% {
        left: 100%;
    }

    100% {
        left: 50%;
    }
}
@-moz-keyframes animate-right {
    0% {
        left: 100%;
    }

    100% {
        left: 50%;
    }
}
@keyframes animate-right {
    0% {
        left: 100%;
    }

    100% {
        left: 50%;
    }
}

@-webkit-keyframes animate-top {
    0% {
        top: -1000px;
    }

    100% {
        top: 50%;
    }
}
@-moz-keyframes animate-top {
    0% {
        top: -1000px;
    }

    100% {
        top: 50%;
    }
}
@keyframes animate-top {
    0% {
        top: -1000px;
    }

    100% {
        top: 50%;
    }
}

@-webkit-keyframes animate-bottom {
    0% {
        top: 100%;
    }

    100% {
        top: 50%;
    }
}
@-moz-keyframes animate-bottom {
    0% {
        top: 100%;
    }

    100% {
        top: 50%;
    }
}
@keyframes animate-bottom {
    0% {
        top: 100%;
    }

    100% {
        top: 50%;
    }
}
    </style>
    <div class$="ox-modal-outer [[className]]">
      <div class="ox-modal-mask" on-click="onMaskClick"></div>
      <div class$="ox-modal-inner [[animationtype]]">
        <slot name="icon"></slot>
        <h3 class="title">{{title}}</h3>
        <slot name="content"></slot>
        <div class="ox-modal-btn-wrap clearfix">
        <div class="ox-modal-cancel fl" on-click="onCancel">
        {{canceltext}}
        </div>
        <div class="ox-modal-ok fr" on-click="onOk">
        {{oktext}}
        </div>
        </div>
      </div>
    </div>
    `;
    }
    static get properties() {
        return {
            //对话框是否可见
            visible: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
            },
            // 对话框类型
            type: {
                type: String,
                value: 'success',
            },
            // 与页面元素绑定
            for: {
                type: String,
                value: ''
            },
            //标题
            title: {
                type: String,
                value: ''
            },
            //确定按钮文字
            oktext: {
                type: String,
                value: '确定'
            },
            //取消按钮文字
            canceltext: {
                type: String,
                value: '取消'
            },
            // 是否允许点击遮罩层关闭
            maskcloseable: {
                type: Boolean,
                value: true
            },
            className: String,
            // 对话框动画
            animationtype: {
                type: String,
                value: ''
            },
            // 是否为新添加的对话框
            isadd: {
                type: Boolean,
                value: false
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback')
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback')
    }

    ready() {
        console.log('ready')
        // console.log(this.oktext)
        super.ready();
        let that = this;
        if (this.for.length > 0) {
            this.getForNode().addEventListener('click', function() {
                this.show()
            }.bind(this))
        }
        this.className = `ox-modal-outer-${this.type}`;
    }
    // _attributeTypeChanged() {
    //   console.log('_attributeTypeChanged', this.type);
    //   this.className = `ox-modal-outer-${this.type}`;
    // }
    onClick(e) {
        // let name = document.getElementsByClassName('name')[0]
        // name.innerHTML = "刘浩浩"
    }
    getForNode() {
        return document.querySelector(`#${this.for}`);
    }
    onCancel() {
        console.log('点击了取消')
        this.hide();
    }
    onOk() {
        console.log('点击了确定')
        this.hide();
    }
    onMaskClick(e) {
        if (this.maskcloseable) {
            this.hide();
        }
    }
    setVisible(isVisible) {
        this.visible = isVisible;
        console.log(this.visible)
    }
    hide(callback) {
        this.setVisible(false)
        if (this.isadd) {
            this.remove()
            // this.parentNode.removeChild(this)
        }
        callback && callback()
    }
    show(callback) {
        this.setVisible(true)
        callback && callback()
    }
    // success(obj) {
    //     console.log('success')
    //     this.type = 'check';
    //     this.mask = 'show';
    //     this.themeIcon = 'success'
    //     this.showModal(obj)
    // }
    // warning(obj) {
    //     console.log('warning')
    //     this.type = 'exclamation';
    //     this.mask = 'show';
    //     this.themeIcon = 'warning'
    //     this.showModal(obj)
    // }
    // error(obj) {
    //     console.log('error')
    //     this.type = 'close';
    //     this.mask = 'show';
    //     this.themeIcon = 'error';
    //     this.showModal(obj)
    // }
    // showModal(obj) {
    //     if (obj) {
    //         if (obj.title) {
    //             this.title = obj.title
    //         }
    //         if (obj.content) {
    //             this.content = obj.content
    //         }
    //         if (obj.oktext) {
    //             this.oktext = obj.oktext
    //         }
    //         if (obj['cancel-text']) {
    //             console.log('cancel')
    //             this['cancel-text'] = obj['cancel-text']
    //         }
    //     }
    // }
}

customElements.define('ox-modal', OXModal);