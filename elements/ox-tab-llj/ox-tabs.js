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

    this.addEventListener('load-complete', async (e) => {
      console.log(e.detail.message);
      console.log(await this.requestUpdate());
    });
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
          background: #D99F53;
          width: 100px;  
          z-index:101; 
          transition: all .5s;
        }
      </style>
      <div class="ol-tabs" > 
        <div class="active-bar"></div>
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return {
      activebar: {
        type: Number,
        value: 0,
        observer:'attrChange'
      },
    };
  }
  attrChange(newVal,oldVal){    
    let tabDom = this.querySelectorAll("ox-tab-pane")[newVal];
    if(!tabDom) return false
    let width = tabDom.offsetWidth; 
    let left =(oldVal!==undefined && tabDom.offsetLeft) || 0;
    let activeDom = this.shadowRoot.querySelector(".active-bar"); 
    activeDom.style.width=width+'px'; 
    activeDom.style.webkitTransform=`translateX(${left}px)` 
  } 
  //计算宽度
  getLineWidth(){
    let domWidth=0;
    let childDom = this.querySelectorAll("ox-tab-pane"); 
    let childNum = childDom.length;   
    let fontSize = this.initBar(); 
    if(!fontSize) return false;

    childDom.forEach((val,index)=>{ 
      // 添加属性
      val.setAttribute("index",index)
      domWidth+=val.offsetWidth;
    }) 
    domWidth = (domWidth/fontSize*14)+(childNum-1)*46;
    return domWidth
  }
  //初始化
  initBar(){
    let activeDom = this.shadowRoot.querySelector(".active-bar");
    let paneDom = this.querySelector("ox-tab-pane");
    if(!paneDom)  return false;
    // 获取继承的最终的字体大小
    let fontSize = document.defaultView.getComputedStyle(paneDom,null).fontSize;
    fontSize = Number(fontSize.replace("px",''))
    let activeBarWidth = (paneDom && paneDom.offsetWidth/fontSize*14) || 0; 
    activeDom.style.width=activeBarWidth+'px' ;
    return fontSize;
  }
  ready() {
    super.ready();  
    let domWidth= this.getLineWidth()  
    this.style.width=domWidth+'px'; 
  }  
} 
window.customElements.define('ox-tabs', OXTabs);