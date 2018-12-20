import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-bubble-alert
 */
class OXBubbleAlert extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html `
    <style>
    @import '../elements/ox-bubble-wangfanglan/ox-bubble.css';
    </style>
      <div class$="ox-bubble-alert ox-bubble-alert-{{type}}">
        <div class="title">{{title}}</div>
        <slot></slot>
        <div class$="triangle triangle-[[type]]">
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: ''
      },
      oxClass:{
        type:String,
        value: '',
      },
      type:{
        type:String,
        value: '',
      },
      triangleColor:{
        type:String,
        value:''
      }
    };
  }
  changeColor(e){
    console.log(this);
    this.style.display = "none";
  }

  ready() {
    this.className = `ox-bubble-alert  ox-bubble-alert-${this.type} ${this.oxClass}`;
    this.changeColor();
    super.ready();
  }
}

customElements.define('ox-bubble-alert', OXBubbleAlert);