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
      @import '../elements/ox-menu-mamingyang/ox-menu-mamingyang.css'
    </style>
      <div class="ox-menu-box">
        <slot name="title"></slot>
        <div class="ox-menu-ground">
          <slot class="ox-menu-item" name="ground-title"></solt>
        </div>
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
        type: Boolean,
        value: 'ox-show'
      }
    }
  }
  isDisabled() {
    return this.querySelector(``);
  }
  onClick() {
    let _this = this;
    this.disabled = false
    this.firstElementChild.addEventListener('click', function() {
      console.log(this.nextElementSibling)
      this.nextElementSilbing.style.display="block";     
    })
  }
  onShow() {

  }
  ready() {
    super.ready();
    this.onClick();
  }
}
window.customElements.define('ox-menu', OXMenu);