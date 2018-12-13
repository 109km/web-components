import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tab
 */
class OXTabContent extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html`
    <style>
      @import '../elements/ox-tab-wangfanglan/ox-tab.css';
    </style>
      <div class$="ox-content {{active}}">
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return {
      indexContent : {
        type: String,
        value: ''
      },
      active : {
        type: String,
        value: ''
      }
    };
  }
  color(e){
    console.log(1);
    console.log(this.getAttribute("index-content"));
    if(this.getAttribute("index-content") == "option-1"){
      this.active = "ox-content-active"
    }
  }

  ready() {
    this.color();
    super.ready();
  }
}

window.customElements.define('ox-tab-content', OXTabContent);