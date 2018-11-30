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

  static get properties() {
    return {
      checked:{
        type: Boolean,
        value: false
      },
    }
  }

  onClick(e) {
    if (this.hasAttribute('disabled')) return;
    console.log('checked:', this.hasAttribute('checked'));

    if (this.hasAttribute('checked')) {
      this.removeAttribute('checked');
      this.className = '';
      this.checked = false;
    } else {
      this.checked = true;
      this.setAttribute('checked', true);
      this.className = 'ox-switch-actived';
    }
  }

  setDisabled() {
    this.setAttribute('disabled');
  }

  removeDisabled() {
    this.removeAttribute('disabled');
  }

  ready() {
    super.ready();
    console.log('checked:', this.checked);
  }
}

window.customElements.define('ox-switch', OXSwitch);
