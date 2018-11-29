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
        @import '../elements/ox-input/ox-input.css';
      </style>
      <input type="{{type}}" placeholder="{{placeholder}}" disabled="{{disabled}}"/>
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
        value:"",
      },
      disabled: {
        type: Boolean,
        value:false,
      }
    };
  }
  ready() {
    super.ready();
    //this.className = `ox-popup ox-popup-${this.data-derection}`;
  }
  // onClick(e){
  //   if (this.hasAttribute('disabled')) return;
  // }
}

window.customElements.define('ox-input', OXInput);