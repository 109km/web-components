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
      @import '../elements/ox-checkbox/ox-checkbox.css';
    </style>
    <div class="ox-checkbox-outer">
      <div class="ox-checkbox-inner">
        <slot name="icon"></slot>
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
      }else{
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