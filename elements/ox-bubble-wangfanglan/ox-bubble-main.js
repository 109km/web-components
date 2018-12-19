import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-bubble-main
 */
class OXBubbleMain extends PolymerElement {
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
        <div class="ox-bubble-main">
            <slot></slot>
        </div>
    `;
  }
  static get properties() {
    return {
      type: {
        type:String,
        value:'left'
      },
      titleContent: {
        type: String,
        value: ''
      },
      oxClass:{
        type:String,
        value: '',
      },
      triangleColor:{
        type:String,
        value:''
      }
    };
  }
  onMouseenter(e) {
    console.log("鼠标进入");
    var alert = this.parentNode.children[1];
    var type = alert.getAttribute("type")
    var triangle = alert.shadowRoot.querySelector(".triangle");
    var color = alert.getAttribute("triangle-color");
    var title = alert.getAttribute("title");
    if(type == "left"){
      triangle.style.borderLeftColor = color;
    }else if(type == "right"){
      triangle.style.borderRightColor = color;
    }else if(type == "top"){
      triangle.style.borderTopColor = color;
    }else{
      triangle.style.borderBottomColor = color;
    }
    alert.style.display = "block";
    alert.shadowRoot.querySelector(".ox-bubble-alert").display = "block";
    console.log(title);

    if(title != null){
      console.log("buweikong");
      console.log(alert.shadowRoot.querySelector(".ox-bubble-alert"));
      alert.shadowRoot.querySelector(".ox-bubble-alert").classList.add("wrap");
    }else{
      console.log("kong")
    }
  }
  onMouseleave(e) {
    console.log("鼠标移出");
    var alert = this.parentNode.children[1];
    alert.style.display = "none";
    alert.shadowRoot.querySelector(".ox-bubble-alert").display = "none";
  }

  ready() {
    super.ready();
    this.className = `ox-bubble-main ox-bubble-box-${this.type} ${this.oxClass}`;
  }
}

customElements.define('ox-bubble-main', OXBubbleMain);