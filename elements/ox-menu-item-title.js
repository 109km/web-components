/**
 * @name ox-nav
 */
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class MenuItemTitle extends PolymerElement {
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
          cursor: pointer;
        }
        :host .ox-menu-title:hover {
          background: rgba(213, 158, 91, .3);
        }
        :host(.disabled) .ox-menu-title {
          color: #999;
          cursor:no-drop;
        }
        :host(.disabled) .ox-menu-title:hover {
          background: rgba(255, 255, 255, 0);
        }
        
        .ox-menu-title {
          display: block;
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
          font-size: 16px;
          position: relative;
        }
        .ox-menu-title:after {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-right-width: 2px;
          border-bottom-width: 2px;
          border-right-style: solid;
          border-bottom-style: solid;
          position: absolute;
          right: 20px;
          top: 40%;
          transform: rotate(45deg);
          transition: all .3s ease-in-out;
        }
        .ox-menu-title.show:after {
          transform: rotate(-135deg);
          transition: all .3s ease-in-out;
        }  
      </style>
      <slot class$="ox-menu-title [[open]]"></slot>
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
      open: {
        type: String
      }
    }
  }
  ready() {
    super.ready();
    if((/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/).test(this.textColor)) {
      this.style.color = this.textColor
    }
    if(this.disabled) {
      this.className += 'disabled'
    }else {
      this.onclick();
    }
  }
  onclick() {
    this.addEventListener('click', function() {
      this.isVisibled();
    })
  }
  isVisibled() {
    this.open = 'show'
    this.visible = !this.visible;
    this.nextElementSibling.show = this.visible;
    if(this.visible) {
      this.open = 'show';
    }else {
      this.open = '';
    }
  }
}

window.customElements.define('menu-title', MenuItemTitle);