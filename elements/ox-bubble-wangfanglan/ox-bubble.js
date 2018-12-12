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
    this.addEventListener('mouseenter', this.onMouseenter);
    this.addEventListener('mouseleave', this.onMouseleave);
  }
  static get template() {
    return html `
    <style>
    @import '../elements/ox-bubble-wangfanglan/ox-bubble.css';
    </style>
        <div class="ox-bubble">
          {{director}}
          <div class$="ox-bubble-box [[mask]] ox-bubble-box-[[type]] ox-bubble-box-[[titleOk]]">
            <div class="title">{{titleContent}}</div>
            <div class="content">{{content}}</div>
            <div class$="triangle triangle-[[type]] triangle-[[type]]-[[titleOk]]">
            </div>
          </div>
        </div>
    `;
  }
  static get properties() {
    return {
      director: {
        type: String,
        value: '左边弹出'
      },
      content:{
        type: String,
        value: '气泡内容'
      },
      mask: {
        type:String,
        value:'hide'
      },
      type: {
        type:String,
        value:'left'
      },
      titleContent: {
        type: String,
        value: ''
      },
      titleOk:{
        type: String,
        value: ''
      }
    };
  }
  onMouseenter(e) {
    console.log("鼠标进入");
    this.mask = "show";
  }
  onMouseleave(e) {
    console.log("鼠标移出");
    this.mask = "hide";
  }
  ready() {
    super.ready();
    this.className = `ox-bubble-box ox-bubble-box-${this.type}`;
    console.log(this.className);
  }
}

customElements.define('ox-bubble', OXBubble);