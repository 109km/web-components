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
        .ox-group-item {
          display: block;
          padding-left: 20px;
        }
        :host(.disabled) .ox-group-item:hover {
          background: rgba(213, 158, 91, 0);
        }
        :host .ox-group-item:hover {
          background: rgba(213, 158, 91, .3);
        }
      </style>
      <slot class="ox-group-item"></slot>
    `;
  }

  static get properties() {
    return {
       disabled: {
         type: Boolean,
         value: false
       },
       textColor: {
        type: String
      },
    }
  }
  ready() {
    super.ready();
    if((/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/).test(this.textColor)) {
      this.style.color = this.textColor
    }
    if(this.disabled) {
      this.className += 'disabled'
    }
  }
  
}

window.customElements.define('menu-group-item', menuGroupItem);