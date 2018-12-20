import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-button
 */
class OXButton extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.toggle);
  }
  static get template() {
    return html `
      <style>
        @import '../elements/ox-button/ox-button.css';
      </style>
      <slot></slot>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'primary',
      }
    };
  }
  ready() {
    super.ready();
    this.className = `ox-button ox-button-${this.type}`;
  }
  toggle() {
    this.clicked = !Number(this.clicked);
  }
  _propertyShowChanged(oldValue, newValue) {
    console.log(oldValue, newValue);
  }
}

window.customElements.define('ox-button', OXButton);