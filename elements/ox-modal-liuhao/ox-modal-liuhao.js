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
    @import '../elements/ox-modal-liuhao/ox-modal-liuhao.css';
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
                value: '标题'
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
            isadd:{
                type:Boolean,
                value:false
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
        if(this.isadd){
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