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
          <div class$="ox-bubble-box [[mask]] ox-bubble-box-[[type]]">
            <div class="title">{{titleContent}}</div>
            <div class="content">{{content}}</div>
            <div class$="triangle triangle-[[type]]">
            </div>
          </div>
        </div>
    `;
  }
  static get properties() {
    return {
      director: {
        type: String,
        value: ''
      },
      content:{
        type: String,
        value: ''
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
      }
    };
  }
  onMouseenter(e) {
    console.log("鼠标进入");
    this.mask = "show";
    var title = this.titleContent;
    console.log(title);
    if(title !== ""){
      //var a = document.querySelector(".title");
      console.log(this.shadowRoot.children[1].children[0].children[2].className);
      this.shadowRoot.children[1].children[0].className += " ox-bubble-box-ok";
      this.shadowRoot.children[1].children[0].children[2].className += ' triangle-' + this.type + '-ok';
      //console.log(e.target.children);
      //e.target.children.setAttribute('class','ox-bubble-wangfanglan-box-ok');
    }else{
      console.log(0)
    }
  }
  onMouseleave(e) {
    console.log("鼠标移出");
    this.mask = "hide";
    var title = this.titleContent;
    if(title !== ""){
      //var a = document.querySelector(".title");
      console.log(this.shadowRoot.children[1].children[0].className);
      this.shadowRoot.children[1].children[0].className += "ox-bubble-wangfanglan-box-ok";
      //console.log(e.target.children);
      //e.target.children.setAttribute('class','ox-bubble-wangfanglan-box-ok');
    }else{
      console.log(0)
    }
  }

  ready() {
    super.ready();
    //hasTitle();
    this.className = `ox-bubble-box ox-bubble-box-${this.type}`;
  }
}

customElements.define('ox-bubble', OXBubble);