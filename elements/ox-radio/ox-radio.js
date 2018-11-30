import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-radio
 */
class OXRadio extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.onClick);
    console.log(this.tagName);
  }
  static get template() {
    return html `
    <style>
      @import '../elements/ox-radio/ox-radio.css';
    </style>
    <div class="ox-radio-outer">
      <div class="ox-radio-inner">
      </div>
    </div>
    <div class="ox-radio-label">
      <slot></slot>
    </div>
    `;
  }
  static get properties() {
    return {
      group: {
        type: String,
        value: '',
      },
      actived: {
        type: Boolean,
        value: false
      },
      checked: {
        type: Boolean,
        value: false
      },
      value: {
        type: String,
        value: ''
      }
    };
  }
  onClick(e) {
    if (this.hasAttribute('disabled')) return;
    let radios = this.getGroupRadios();
    radios.forEach(function(radio, index) {
      radio.className = '';
      radio.removeAttribute('actived');
    });

    this.checked = true;
    this.className = "ox-radio-actived";
    console.log('此选项值为' + this.value);
  }
  getGroupRadios() {
    return document.querySelectorAll(`[group=${this.group}]`);
  }
  setDisabled() {
    this.setAttribute('disabled');
  }
  removeDisabled() {
    this.removeAttribute('disabled');
  }
  ready() {
    super.ready();
    console.log(this.checked);
  }
}

window.customElements.define('ox-radio', OXRadio);