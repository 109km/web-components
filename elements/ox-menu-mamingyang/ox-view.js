/**
 * @name ox-nav
 */
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class OXView extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html `
      <style>
        :host {
          display: none;
          width: 500px;
          height: 200px;
          background: #fff;
        }
        :host(.show) {
          display: block;
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      for: {
        type: String,
        value: ''
      },
      visilted: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    }
  }
  ready() {
    super.ready();
    let _this = this;
    this.getForNode().addEventListener('click', function(e) {
      let isTrue = this.getAttribute('disabled') === 'true';
      if(isTrue) {
        return;
      }
      _this.isVisilted();
    })
  }
  // 根据 `for` 获取绑定按钮
  getForNode() {
    return document.querySelector(`#${this.for}`);
  }
  isVisilted() {
    let sibling = document.querySelectorAll('ox-view');
    for(let i = 0; i < sibling.length; i++) {
      if(sibling[i].className === 'show') {
        sibling[i].className = '';
      }
    }
    this.className = 'show'
  }
}

window.customElements.define('ox-view', OXView);