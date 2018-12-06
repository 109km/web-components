import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-label
 */
class OXLabel extends PolymerElement {
  constructor() {
    super(); 
  }
  static get template() {
    return html `
      <style>
        @import '../elements/ox-label/ox-label.css';
      </style>
      <slot></slot>
      <span on-click="hide" class="delete">x</span>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'default',
      }, 
      oxclass: {
        type: String, 
      }
    };
  }
  ready() {
    super.ready();
    this.className = `ox-label ox-label-${this.type} ${this.oxclass}`;  
  }
  hide() {
    if(!this.getAttribute("class").includes("delete")) return false;
    this.style.display = "none" 
  } 
} 
window.customElements.define('ox-label', OXLabel);