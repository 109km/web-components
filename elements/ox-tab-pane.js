import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tab-pane
 */
class OXTabPane extends PolymerElement {
  constructor() {
    super(); 
    
  }
  static get template() {
    return html `
      <style>
        .ox-tab-pane{
          font-size:14px; 
          color:#282828; 
          padding: 16px 0;
          line-height: 1; 
          cursor: pointer;
          transition:all .5s;
        }  
        .piece{
          border: 1px solid #D99F53;
          cursor: pointer;
          padding: 8px 12px;
          position: relative;
          color:#D99F53;
          text-align:center; 
          margin-right: -1px;
        } 
        .first{
          border-radius:4px 0 0 4px;
        }
        .last{
          border-radius:0px 4px 4px 0px; 
        }
      </style>
      <div on-click="change" class$="ox-tab-pane [[type]] [[active]] [[className]]" inner-h-t-m-l={{tabHtml}}></div>
    `;
  }
  static get properties() {
    return { 
      //标签内容
      label:{
        type:String,
        value:"tabs"
      },
      type:{
        type:String,
        value:""
      },
      // 对应card id
      oxtarget:{
        type:String, 
      }, 
      className:{
        type:String,
        value:false,
        observer:'attrChange'
      },
    };
  }
  // 初始化颜色
  initColor(type){ 
    let bgcolor = this.backgroundColor;
    let color = this.color;
    let target = this.shadowRoot.querySelector(".ox-tab-pane")
    let targetActive = this.shadowRoot.querySelector(".active ")
    if(type ==="piece"){
      target.style.borderColor = bgcolor;
      target.style.color = bgcolor;
      if(!targetActive) return false;
      target.style.backgroundColor = bgcolor;
      targetActive.style.color = color;
    }else{ 
      target.style.color = color;
      if(!targetActive) return false;
      targetActive.style.color = bgcolor;
    }
  }
  ready() {
    super.ready();  
    this.tabHtml =this.label;  
    this.parentNode.rendered = true; 
    let index = Number(this.getAttribute("index"));    
    let domLength = this.parentNode.children.length; 
    this.type=this.parentNode.type || this.parentNode.getAttribute("type");
    this.backgroundColor=this.parentNode.backgroundColor || this.parentNode.getAttribute("tab-color");
    this.color=this.parentNode.color || this.parentNode.getAttribute("color");
    
    // 默认第一个card显示及tab-pane active 
    switch (index) {
      case 0: 
      this.active = "active"
        this.className = "first"
        let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
        if(!card)return false;
        card.show=true;
        break;
    
      case domLength-1:
        this.className = "last"
        break;
    } 
    
    this.initColor(this.type)
  
  } 
  // tab切换
  change(){  
    let type =this.type;
    let bgcolor = this.backgroundColor;
    let color = this.color;
    let target = this.shadowRoot.querySelector(".ox-tab-pane");
    [...this.parentNode.children].forEach((val)=>{
      let target = val.shadowRoot.querySelector(".ox-tab-pane"); 
      // 重置
      if(type === "piece"){
        target.style.color=bgcolor;   
        target.style.backgroundColor="#fff"; 
      }else{
        target.style.color=color
      } 
    });

    if(type === "piece"){
      target.style.color=color; 
      target.style.backgroundColor=bgcolor; 
    }else{
      target.style.color=bgcolor;
    } 

      
    let index = this.getAttribute("index"); 
    this.parentNode.activebar = Number(index); 
    let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
    if(!card)return false;
    card.show=true; 
  } 
} 
window.customElements.define('ox-tab-pane', OXTabPane);