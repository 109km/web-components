import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer-components`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PolymerComponents extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.toggle);
  }
  static get template() {
    return html `
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]! isClicked = [[clicked]]</h2>
    `;
  }
  static get properties() {
    return {
      clicked: {
        type: Boolean,
        value: false
      },
      prop1: {
        type: String,
        value: 'polymer-components',
      },
    };
  }
  toggle() {
    this.clicked = !this.clicked;
  }
}

window.customElements.define('polymer-components', PolymerComponents);