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
    this.addEventListener('click', this.hide);
  }
  static get template() {
    return html `
      <style>
        @import '../elements/ox-label/ox-label.css';
      </style>
      <slot></slot>
      <span class="delete">x</span>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'default',
      }
    };
  }
  ready() {
    super.ready();
    this.className = `ox-label ox-label-${this.type}`; 
  }
  hide() {
    if(!this.getAttribute("class").includes("delete")) return false;
    this.style.display = "none" 
  } 
}

window.customElements.define('ox-label', OXButton);