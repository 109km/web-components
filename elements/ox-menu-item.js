/**
 * @name ox-nav
 */
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class MenuItem extends PolymerElement {
  constructor() {
    super();
  }
  
  static get template() {
    return html `
    <style>
      :host {
        display: block;
      }
    </style>
    <slot name="title"></slot>
    <slot name="list"></slot>
    `;
  }

  static get properties() {
    return {
      index: {
        type: Number
      }
    }
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('sub-menu', MenuItem);