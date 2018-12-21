/**
 * @name ox-nav
 */
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class OXMenu extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html `
    <style>
      :host {
        display: block;
        width: 300px;
        color: #333;
        background: #ffffff;
        box-sizing: border-box;
      }
    </style>
    <slot></slot>
    `;
  }

  static get properties() {
    return {
      backgroundColor: {
        type: String
      },
      textColor: {
        type: String
      }
    }
  }
  ready() {
    super.ready();
    if((/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/).test(this.backgroundColor)) {
      this.style.backgroundColor = this.backgroundColor
    }
    if((/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/).test(this.textColor)) {
      this.style.color = this.textColor
    }
  }
} 
window.customElements.define('ox-menu', OXMenu);