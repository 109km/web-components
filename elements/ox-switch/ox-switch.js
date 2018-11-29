import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-switch
 */
class OXSwitch extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.onClick);
  }

  static get template() {
    return html`
      <style>
        @import '../elements/ox-switch/ox-switch.css';
      </style>
      <div class="ox-switch-outer">
        <div class="ox-switch-inner"></div>
      </div>
    `;
  }

  onClick(e) {
    // if () return;
  }

  ready() {
    super.ready();
  }
}

window.customElements.define('ox-switch', OXSwitch);
