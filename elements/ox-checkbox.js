import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-checkbox
 */
class OXCheckbox extends PolymerElement {
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
      .ox-checkbox-outer {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 3px;
        text-align: center;
        border: 1px solid var(--theme-color-default-border);
      }

      :host(.ox-checkbox-actived) .ox-checkbox-outer {
        background-color: var(--theme-color-primary);
        border-color: var(--theme-color-primary);
      }
      .ox-checkbox-label{
        display: inline-block;
      }
      .ox-checkbox-inner {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-top: 1px;
      }
      .ox-checkbox-inner .icon{
        color: var(--color-white);
        font-weight: bold;
      }
      :host([disabled]){
        cursor: not-allowed;
      }
      :host([disabled]) .ox-checkbox-outer{
        background-color: var(--theme-color-radio-disabled);
      }
      :host([disabled]) .ox-checkbox-inner {
        visibility: hidden;
      }
      :host(.ox-checkbox-actived[disabled]) .ox-checkbox-outer{
        background-color: var(--theme-color-radio-active-disabled);
        border-color: var(--theme-color-radio-active-disabled);
      }
      :host(.ox-checkbox-actived[disabled]) .ox-checkbox-inner {
        visibility: visible;
      }
    </style>
    <div class="ox-checkbox-outer">
      <div class="ox-checkbox-inner">
        <span class="icon">&#x2713;</span>
      </div>
    </div>
    <div class="ox-checkbox-label">
      <slot name="label"></slot>
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

    if (this.hasAttribute('checked')) {
      this.removeAttribute('checked');
      this.className = "";
    } else {
      this.setAttribute('checked', true);
      this.className = "ox-checkbox-actived";
    }

    console.log('此选项值为' + this.value);
    console.log(this.getGroupValues());
  }
  getGroupOptions() {
    return document.querySelectorAll(`[group=${this.group}]`);
  }
  setDisabled() {
    this.setAttribute('disabled');
  }
  removeDisabled() {
    this.removeAttribute('disabled');
  }
  getGroupValues() {
    let options = this.getGroupOptions();
    return Array.prototype.map.call(options, function(option) {
      if (option.hasAttribute('checked')) {
        return option.value;
      } else {
        return null;
      }
    });
  }
  ready() {
    super.ready();
    if (this.hasAttribute('checked')) {
      this.className = "ox-checkbox-actived";
    }
  }
}

window.customElements.define('ox-checkbox', OXCheckbox);