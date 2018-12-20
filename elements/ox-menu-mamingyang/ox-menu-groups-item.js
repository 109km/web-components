/**
 * @name ox-nav
 */
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class menuGroupItem extends PolymerElement {
  constructor() {
    super();
  }
  handleItemClick(e){
    console.log('aaaaa',e.target)
  }
  static get template() {
    return html `
      <style>
        :host {
          display: block;
          height: 30px;
          line-height: 30px;
          cursor: pointer;
        }
        :host(.disabled) {
          color: #999;
          cursor:no-drop;
        }
      </style>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
       disabled: {
         type: Boolean,
         value: false
       }
    }
  }
  ready() {
    super.ready();
    if(this.disabled) {
      this.className += 'disabled'
    }
  }
  
}

window.customElements.define('menu-group-item', menuGroupItem);