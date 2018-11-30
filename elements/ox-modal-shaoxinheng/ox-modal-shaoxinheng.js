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
      @import '../elements/ox-modal-shaoxinheng/ox-modal-shaoxinheng.css';
    </style>
    <div class="ox-modal-mask" on-click="onMaskClick">
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
    if (this.for.length > 0) {
      this.getForNode().addEventListener('click', function() {
        this.show();
      }.bind(this));
    }
  }
  // 根据 `for` 获取绑定按钮
  getForNode() {
    return document.querySelector(`#${this.for}`);
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
    console.log(this.maskcloseable);
    if (this.maskcloseable) {
      this.hide();
    }
  }
  // 变更visible属性
  setVisible(isVisible) {
    this.visible = !!isVisible;
  }
  show(callback) {
    this.setVisible(true);
    callback && callback();
  }
  hide(callback) {
    this.setVisible(false);
    callback && callback();
  }
  _attributeTypeChanged() {
    console.log('_attributeTypeChanged', this.type);
    this.className = `ox-modal-inner-action ox-modal-inner-${this.type}`;
  }
}

window.customElements.define('ox-modal', OXModal);