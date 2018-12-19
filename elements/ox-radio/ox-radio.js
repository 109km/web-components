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
  }
  static get template() {
    return html `
    <style>
    :host{
      cursor: default;
    }
    .ox-radio-outer {
      display: inline-block;
      width: 18px;
      height: 18px;
      line-height:16px;
      border-radius: 50%;
      text-align: center;
      border: 1px solid var(--theme-color-default-border);
    }
    :host(.ox-radio-actived) .ox-radio-outer {
      background-color: var(--theme-color-primary);
      border-color: var(--theme-color-primary);
    }
    .ox-radio-label{
      display: inline-block;
    }
    .ox-radio-inner {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--color-white);
    }
    :host([disabled]){
      cursor: not-allowed;
    }
    :host([disabled]) .ox-radio-outer{
      background-color: var(--theme-color-radio-disabled);
    }
    :host([disabled]) .ox-radio-inner {
      visibility: hidden;
    }
    :host(.ox-radio-actived[disabled]) .ox-radio-outer{
      background-color: var(--theme-color-radio-active-disabled);
      border-color: var(--theme-color-radio-active-disabled);
    }
    :host(.ox-radio-actived[disabled]) .ox-radio-inner {
      visibility: visible;
    }
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
    this.className = "ox-radio-actived";
    console.log("选值为",this.value);
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
  }
}

window.customElements.define('ox-radio', OXRadio);