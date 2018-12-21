
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class MenuItemGroups extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html `
    <style>
      :host{
        display: block;
        height: 0px;
        overflow: hidden;
        transition: all .3s ease-in-out;
      }
      .ox-menu-groups {
        display: block;
        font-size: 14px;
      }
      :host([visible]) {
        transition: all .3s ease-in-out;
      }
    </style>
    <slot class="ox-menu-groups"></slot>
    `;
  }
  static get properties() {
    return {
      show: {
        type: Boolean,
        observer: '_isShow'
      },
      visible: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      height: {
        type: String
      }
    }
  }
  ready() {
    super.ready();
  }
  _isShow(e) {
    this.height = this.children[0].offsetHeight * this.children.length;
    this.visible = !this.visible
    if(e) {
      this.style.height = `${this.height}px`;
    }else {
      this.style.height = '0px';
    }
  }
}
window.customElements.define('menu-group', MenuItemGroups);