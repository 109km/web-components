/**
 * @name ox-nav
 */
import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

class OXNav extends PolymerElement {
  constructor() {
    super();
  }
  
  static get template() {
    return html `
    <style>
      @import '../elements/ox-menu-mamingyang/ox-menu-mamingyang.css'
    </style>
      <div class="ox-menu-box">
        <slot name="title"></slot>
        <slot class="ox-menu-item" name="ground-title">
        
        </solt>
        <span>[[isShow]]</span>
        
      </div>
    `;
  }
  static get properties() {
    return {
      disabled: {
        type: Boolean,
        notify: true,
        value: false,
      },
      isShow: {
        type: String,
        value: 'ddd'
      }
    }
  }
  isDisabled() {
    return this.querySelector(``);
  }
  onClick() {
    this.disabled = false
    this.firstElementChild.addEventListener('click', function() {
      console.log(this)
    }.bind(this))
  }
  onShow() {

  }
  ready() {
    super.ready();
    this.onClick();
    console.log(this)
  }
}
window.customElements.define('ox-nav', OXNav);