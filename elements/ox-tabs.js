import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import { translate } from '@polymer/polymer/lib/utils/path';

/**
 * @name ox-tabs
 */
class OXTabs extends PolymerElement {
  constructor() {
    super(); 
  }
  static get template() {
    return html `
      <style>
        .ol-tabs{
          width:auto; 
          height:auto; 
          display: inline-block;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          margin-bottom: 30px
        }
        .ol-tabs::after{
          content: '';
          position: absolute;
          right:0;
          left:0;
          bottom:0; 
          height:4px;
          background: #E9E9E9;
          z-index:100;
        }
        .active-bar{
          position: absolute;
          bottom:0;
          height:4px; 
          width: 100px;  
          z-index:101; 
          transition: all .5s;
        }
        .piece.ol-tabs{
          justify-content: flex-start
        }
        .piece.ol-tabs::after{
          display:none;
        }
        .piece .active-bar{
          display:none;
        }
      </style>
      <div class$="ol-tabs [[type]]" > 
        <div class="active-bar"></div> 
        <slot></slot> 
      </div>
    `;
  }
  static get properties() {
    return {
      // slide 条件下active 状态
      activebar: {
        type: Number,
        value: 0,
        observer:'attrChange'
      },
      // tab-pane 是否渲染到页面
      rendered:{
        type:Boolean,
        value:false,
        observer:"render"
      },
      //tab类型 slide/piece
      type:{
        type: String,
        value: 'slide'
      },
      backgroundColor:{
        type: String,
        value: '#D99F53'
      },
      color:{
        type: String,
        value: '#333'
      }
    };
  }
  render(newVal,oldVal){
    if(newVal){  
      this.initBar(); 
    }
  }
  // slide类型下 tab切换触发事件
  attrChange(newVal,oldVal){  
    let tabDom = this.querySelectorAll("ox-tab-pane")[newVal];
    if(!tabDom) return false
    let width = tabDom.offsetWidth; 
    let left =(oldVal!==undefined && tabDom.offsetLeft) || 0;
    let activeDom = this.shadowRoot.querySelector(".active-bar"); 
    activeDom.style.webkitTransform=`translateX(${left}px)`;
    activeDom.style.width=width+'px';  
    this.onChange(newVal,oldVal)
  }  
  onChange(callback){
    callback && typeof callback === "function" &&callback()
  }
  //初始化 slide滑动条
  initBar(){
    let activeDom = this.shadowRoot.querySelector(".active-bar");
    let childDom = this.querySelectorAll("ox-tab-pane");  
    let paneDom = this.querySelector("ox-tab-pane");
    if(!paneDom)  return false;
    childDom.forEach((val,index)=>{ 
      // tan-pane添加属性
      val.setAttribute("index",index) ; 
    })  
    // 获取继承的最终的字体大小
    let fontSize = document.defaultView.getComputedStyle(paneDom,null).fontSize;
    fontSize = Number(fontSize.replace("px",''))
     
    let activeBarWidth = paneDom && paneDom.offsetWidth; 
    activeDom.style.width=activeBarWidth+'px' ; 
  }
  ready() { 
    super.ready(); 
    //active-bar 
    this.shadowRoot.querySelector(".active-bar").style.backgroundColor = this.backgroundColor
  }   
} 
window.customElements.define('ox-tabs', OXTabs);