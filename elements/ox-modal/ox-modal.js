/**
 * @name ox-modal
 * @todo 
 * 1. Add more modal types, including success/warning/error.
 * 2. Add more callback events.
 * 3. Add animations.
 */

import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

import '../ox-button/ox-button.js';

class OXModal extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html `
    <style>
      @import '../elements/ox-modal/ox-modal.css';
    </style>
    <div class="ox-modal-mask" on-click="onMaskClick">
      <div class="ox-modal-inner" on-click="onInnerClick">
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
      visible: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      maskcloseable: {
        type: String
      },
      for: {
        type: String,
        value: ''
      },
      type: {
        type: String,
        value: 'default'
      },
      oktext: {
        type: String,
        value: '确认'
      },
      canceltext: {
        type: String,
        value: '取消'
      },
      showclosebutton: {
        type: String,
        value: "no"
      },
      animationtype: {
        type: String,
        value: 'fade'
      },
    };
  }
  ready() {
    super.ready();
    const bindNode = this.getForNode();
    bindNode.addEventListener('click', function() {
      this.show();
    }.bind(this));
  }
  getForNode() {
    return document.querySelector(`#${this.for}`);
  }
  onOK(e) {
    this.hide();
  }
  onCancel(e) {
    this.hide();
  }
  onInnerClick(e) {
    e.stopPropagation();
  }
  onMaskClick(e) {
    if (this.maskcloseable === 'yes') {
      this.hide();
    }
  }
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


}

window.customElements.define('ox-modal', OXModal);