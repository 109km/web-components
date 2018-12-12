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
    /*:host(.page-title:active){*/
      /*color: red;*/
    /*}*/

    .ox-bubble{
      color: var(--color-white);
      background-color: var(--theme-color-primary);
      border-color: var(--theme-color-primary);
      display: inline-block;
      cursor: pointer;
      padding: 8px 20px;
      border-radius: 2px;
      border: 1px solid transparent;
      position: relative;
    }
    .ox-bubble-box{
      /*padding: 8px 15px;*/
      color: #fff;
      background: #333333;
      border-radius: 3px;
      position: absolute;
      /*top: 0;*/
      /*left: -105%;*/
      z-index: 100;
      font-size: 12px;
    }
    .ox-bubble-box{
      width: 140px;
    }
    .ox-bubble-box:hover{
        display: block;
    }
    .show{
      display: block;
    }
    .hide{
      display: none;
    }
    .ox-bubble-box-left{
      top: 50%;
      transform: translateY(-50%);
      left: -150%;
    }
    .ox-bubble-box-right{
      top: 50%;
      transform: translateY(-50%);
      left: 115%;
    }
    .ox-bubble-box-top{
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
    .ox-bubble-box-bottom{
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      /*left: 115%;*/
    }
    .triangle{
      width: 0;
      height: 0;
      border-width: 8px;
      border-style: solid;
      position: absolute;
    }
    .triangle-left{
      border-color: transparent  transparent transparent #333333;
      right: -11%;
      top: 50%;
      transform: translateY(-50%);
    }
    .triangle-right{
      border-color: transparent  #333333 transparent transparent ;
      left: -11%;
      top: 50%;
      transform: translateY(-50%);
    }
    .triangle-top{
      border-color: #333333 transparent  transparent transparent ;
      transform: translateX(-50%);
      top: 100%;
      left: 50%;

    }
    .triangle-bottom{
      border-color: transparent transparent #333333 transparent;
      transform: translateX(-50%);
      bottom: 100%;
      left: 50%;
    }
    .content{
      margin: 8px 22px;
    }

    .title{
      width: 100%;
      background: #E9E9E9;
      line-height: 20px;
      padding-left: 22px;
      box-sizing: border-box;
      color: black;
    }
    .ox-bubble-box-ok{
      background: white;
      box-shadow: 0 10px 30px #ccc;
      color: #000;
    }
    .triangle-left-ok{
      border-color: transparent  transparent transparent #fff;
    }
    .triangle-right-ok{
      border-color: transparent  #fff transparent transparent ;
    }
    .triangle-top-ok{
      border-color: #fff transparent  transparent transparent ;
      /*box-shadow: 0 0 10px #E9E9E9;*/
    }
    .triangle-bottom-ok{
      border-color: transparent transparent #E9E9E9 transparent;
    }
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