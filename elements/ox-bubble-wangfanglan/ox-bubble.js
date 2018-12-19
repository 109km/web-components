import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-bubble
 */
class OXBubble extends PolymerElement {
  constructor() {
    super();
    //hasTitle();
  }
  static get template() {
    return html `
    <style>
    @import '../elements/ox-bubble-wangfanglan/ox-bubble.css';
    </style>
        <div class="ox-bubble">
            <slot></slot>
        </div>
    `;
  }
  static get properties() {
    return {
      oxClass:{
        type:String,
        value: '',
      }
    };
  }

  ready() {
    super.ready();
    this.className = `ox-bubble ${this.oxClass}`;
  }
}

customElements.define('ox-bubble', OXBubble);