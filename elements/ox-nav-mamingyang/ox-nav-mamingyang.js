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
      @import '../elements/ox-nav-mamingyang/ox-nav-mamingyang.css'
    </style>
      <div class="ox-nav-box">
        <slot></slot>
        <div class="ox-nav-item">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
window.customElements.define('ox-nav', OXNav);