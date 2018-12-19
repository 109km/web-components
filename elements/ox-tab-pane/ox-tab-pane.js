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
          color:rgba(217,159,83,1); 
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
          color:rgb(51, 51, 51);
          text-align:center; 
          margin-right: -1px;
        }
        .ox-tab-pane.active{
          background: #D99F53;
          color: #fff;
          transition:all .5s;
        }
      </style>
      <div on-click="change" class$="ox-tab-pane [[type]] [[active]]" inner-h-t-m-l={{tabHtml}}></div>
    `;
  }
  static get properties() {
    return { 
      //标签内容
      label:{
        type:String,
        value:"tabs"
      },
      // 对应card id
      oxtarget:{
        type:String, 
      }, 
    };
  }
  ready() {
    super.ready();  
    this.tabHtml =this.label;  
    this.parentNode.rendered = true; 
    let index = Number(this.getAttribute("index"));   
    this.type=this.parentNode.type 
    // 默认第一个card显示及tab-pane active
    if(index===0){  
      let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
      if(!card)return false;
      card.show=true;
    }; 
    if(this.type==="piece" && index===0){
      this.active = "active"
    }
  } 
  // tab切换
  change(){  
    if(this.type==="piece"){
      [...this.parentNode.children].forEach((val)=>{
        val.shadowRoot.querySelector(".piece").classList.remove("active")
      })
      this.shadowRoot.querySelector(".piece").classList.add("active")
    }else{
      let index = this.getAttribute("index"); 
      this.parentNode.activebar = Number(index); 
    }
    let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
    if(!card)return false;
    card.show=true; 
  } 
} 
window.customElements.define('ox-tab-pane', OXTabPane);