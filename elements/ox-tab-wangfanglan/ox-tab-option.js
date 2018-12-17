import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tab
 */
class OXTabOption extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.onClick);
  }
  static get template() {
    return html`
    <style>
      @import '../elements/ox-tab-wangfanglan/ox-tab.css';
    </style>
      <div class$="ox-option {{active}}">
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return {
      indexOption : {
        type: String,
        value: ''
      },
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
  onClick(e) {
    var optionLength = this.parentNode.children.length;
    for(var i = 0 ; i < optionLength ; i++){
      this.parentNode.children[i].shadowRoot.children[1].className = "ox-option";
    }
    this.shadowRoot.children[1].className += " ox-option-active";

    var optionActive = this.indexOption;
    var contentLength = this.parentNode.parentNode.children[2].children.length;

    for(var k = 0 ; k < contentLength ; k++){
      console.log("k"+k);
      var contentActive = this.parentNode.parentNode.children[2].children[k].shadowRoot.children[1];
      contentActive.className = "ox-content";
    }

    for(var j = 0 ; j < contentLength ; j++){
      var contentActive = this.parentNode.parentNode.children[2].children[j].getAttribute("index-content");
      //console.log(contentActive.getAttribute("index-content"));
      if(optionActive == contentActive){
        var contentActiveDiv = this.parentNode.parentNode.children[2].children[j];
        contentActiveDiv.shadowRoot.children[1].className = "ox-content-active";
        return
      }
    }
  }
  color(e){
    console.log(1);
    console.log(this.getAttribute("index-option"));
    if(this.getAttribute("index-option") == "option-1"){
      console.log(this.querySelector("div"));
      //this.shadowRoot.children[1].className = "ox-option ox-option-active"
      this.active = "ox-option-active"
    }
  }
  //getWidth(e){
  //  console.log(this.parentNode.shadowRoot.children[1].offsetWidth);
  //  var width = this.parentNode.shadowRoot.children[1].offsetWidth + "px";
  //  console.log(this.querySelector(".ox-tab-contents"));
  //  this.parentNode.parentNode.children[2].style.width = width
  //}

  ready() {
    //this.getWidth();
    this.color();
    super.ready();
  }
}

window.customElements.define('ox-tab-option', OXTabOption);