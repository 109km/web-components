import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-button
 */
class OXInput extends PolymerElement {
  constructor() {
    super();
    //this.addEventListener('click', this.onClick);
  }
  static get template() {
    return html `
      <style>
        :host(.ox-input) .ox-inner-input {
          display: inline-block;
          cursor: pointer;
          padding: 8px 20px;
          border-radius: 4px;
          border:1px  var(--color-black) solid;
        }
        :host(.ox-input) .ox-input-error-word{
          display:none;
          color: var(--theme-color-error);
        }
        :host([pressed]) .ox-input-error-word{
          display:block;
        }
        :host(.ox-input) .ox-inner-input-error{
          border:1px var(--theme-color-error) solid;
        }
      </style> 
      <input class="ox-inner-input" type="{{type}}" placeholder="{{placeholder}}" disabled="{{disabled}}"/>
      <div class="ox-input-error-word">输入有误</div>
    `;
  }
  static get properties() {
    return {
      placeholder: {
        type: String,
        value:'11',
      },
      type: {
        type: String,
        value:'primary',
      },
      disabled: {
        type: Boolean,
        value:false,
      }
    };
  }
  ready() {
    super.ready();
    this.className = `ox-input ox-input-${this.type}`;
  }
  // onClick(e){
  //   if (this.hasAttribute('disabled')) return;
  // }
}

window.customElements.define('ox-input', OXInput);