/**
 * @name ox-modal
 * @todo 
 * 1. Add animations.
 * 2. Custom css styles.
 */

import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class OXModal extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html `
    <style>
      @-webkit-keyframes animation-fade {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @-moz-keyframes animation-fade {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @-webkit-keyframes animation-top {
        0% {
          margin-top: -2000px;
        }

        100% {
          margin-top: 0;
        }
      }

      @-moz-keyframes animation-top {
        0% {
          margin-top: -2000px;
        }

        100% {
          margin-top: 0;
        }
      }

      @-webkit-keyframes animation-left {
        0% {
          margin-left: -2000px;
        }

        100% {
          margin-left: 0;
        }
      }

      @-moz-keyframes animation-left {
        0% {
          margin-left: -2000px;
        }

        100% {
          margin-left: 0;
        }
      }

      @-webkit-keyframes animation-left {
        0% {
          margin-left: -2000px;
        }

        100% {
          margin-left: 0;
        }
      }

      @-moz-keyframes animation-right {
        0% {
          margin-right: -2000px;
        }

        100% {
          margin-right: 0;
        }
      }

      @-webkit-keyframes animation-right {
        0% {
          margin-right: -2000px;
        }

        100% {
          margin-right: 0;
        }
      }

      @-moz-keyframes animation-bottom {
        0% {
          margin-bottom: -2000px;
        }

        100% {
          margin-bottom: 0;
        }
      }

      @-webkit-keyframes animation-bottom {
        0% {
          margin-bottom: -2000px;
        }

        100% {
          margin-bottom: 0;
        }
      }



      :host {
        display: none;
      }

      :host([visible]) {
        display: block;
      }

      .ox-modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--mask-bg-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host([visible]) .ox-modal-mask.fade {
        animation: animation-fade 0.3s ease;
      }

      :host([visible]) .ox-modal-mask.top {
        animation: animation-top 0.3s ease;
      }

      :host([visible]) .ox-modal-mask.left {
        animation: animation-left 0.3s ease;
      }

      :host([visible]) .ox-modal-mask.right {
        animation: animation-right 0.3s ease;
      }

      :host([visible]) .ox-modal-mask.bottom {
        animation: animation-bottom 0.3s linear;
      }

      .ox-modal-inner {
        padding: 30px 30px;
        min-width: 270px;
        background-color: var(--modal-bg-color);
        border-radius: var(--theme-border-radius);
      }

      .actions {
        text-align: right;
      }

      .actions .btn {
        cursor: pointer;
        margin-left: 10px;
      }

      .btn-ok {
        color: var(--theme-color-success);
      }

      ::slotted(.title) {
        margin-bottom: 20px;
        font-weight: bold;
        font-size: var(--theme-font-size-large);
      }

      ::slotted(.content) {
        margin-bottom: 30px;
        font-size: var(--theme-font-size-small);
        color: var(--color-grey);
      }

      ::slotted(.icon-area) {
        padding: 10px 0;
        text-align: center;
        margin-bottom: 10px;
        color: var(--theme-color-success);
        font-size: 64px !important;
      }

      .ox-modal-inner-warning ::slotted(.icon-area) {
        color: var(--theme-color-warning);
      }

      .ox-modal-inner-error ::slotted(.icon-area) {
        color: var(--theme-color-error);
      }

      /* Modal with status' icons */
      .ox-modal-inner-action {
        text-align: center;
      }

      .ox-modal-inner-action .actions {
        display: flex;
        justify-content: center;
        text-align: center;
      }

      .ox-modal-inner-action .btn {
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        border: 1px solid transparent;
        border-radius: 2px;
        margin: 0 10px;
      }

      .ox-modal-inner-action .btn-ok {
        color: var(--color-white);
        border-color: var(--theme-color-success);
        background-color: var(--theme-color-success);
      }

      .ox-modal-inner-action .btn-cancel {
        border-color: var(--theme-color-default-border);

      }
    </style>
    <div class$="ox-modal-mask [[animationtype]]" on-click="onMaskClick">
      <div class$="ox-modal-inner [[className]]" on-click="onInnerClick">
        <slot name="icon"></slot>
        <div class="user-content">
          <slot class="title" name="title"></slot>
          <slot class="content" name="content"></slot>
        </div>
        <div class="actions">
          <a class="btn btn-cancel" on-click="onCancel">[[canceltext]]</a>
          <a class="btn btn-ok" on-click="onOK">[[oktext]]</a>
        </div>
      </div>
    </div>
    `;
  }
  static get properties() {
    return {
      // 是否可见
      visible: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      // 点击遮罩层是否可以关闭
      maskcloseable: {
        type: Boolean,
        value: false
      },
      // 与按钮绑定
      for: {
        type: String,
        value: ''
      },
      // 对话框类型
      type: {
        type: String,
        value: 'default',
        observer: '_attributeTypeChanged'
      },
      // 确定按钮文案
      oktext: {
        type: String,
        value: '确认'
      },
      // 取消按钮文案
      canceltext: {
        type: String,
        value: '取消'
      },
      // 是否展示关闭按钮
      showclosebutton: {
        type: Boolean,
        value: false
      },
      // 对话框动画
      animationtype: {
        type: String,
        value: 'fade'
      },
      className: String
    };
  }
  ready() {
    super.ready();
    this.bindEvents();
  }
  // 根据 `for` 获取绑定按钮
  getForNode() {
    return document.querySelector(`#${this.for}`);
  }
  bindEvents() {
    if (this.for.length > 0) {
      this.getForNode().addEventListener('click', function() {
        this.show();
      }.bind(this));
    }
  }
  onOK(e) {
    console.log('Default OK is clicked');
    this.hide();
  }
  onCancel(e) {
    console.log('Default cancel is clicked');
    this.hide();
  }
  onInnerClick(e) {
    e.stopPropagation();
  }
  onMaskClick(e) {
    if (this.maskcloseable) {
      this.hide();
    }
  }
  // 变更visible属性
  setVisible(isVisible) {
    this.visible = !!isVisible;
    console.log(this.visible)
  }
  show(callback) {
    this.setVisible(true);
    callback && callback();
  }
  hide(callback) {
    this.setVisible(false);
    console.log(11)
    callback && callback();
  }
  _attributeTypeChanged() {
    console.log('_attributeTypeChanged', this.animationtype);
    this.className = `ox-modal-inner-action ox-modal-inner-${this.type}`;
  }
}

window.customElements.define('ox-modal', OXModal);