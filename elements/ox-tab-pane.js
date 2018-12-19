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
        .ox-tab-pane.piece.active{
          background: #D99F53;
          color: #fff;
          transition:all .5s;
        }
        .ox-tab-pane.active{
          color: #D99F53; 
          transition:all .5s;
        }
        .first{
          border-radius:4px 0 0 4px;
        }
        .last{
          border-radius:0px 4px 4px 0px; 
        }
      </style>
      <div on-click="change" class$="ox-tab-pane [[type]] [[active]]  [[className]]" inner-h-t-m-l={{tabHtml}}></div>
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
      className:{
        type:String,
        value:false,
        observer:'attrChange'
      },
    };
  }
  ready() {
    super.ready();  
    this.tabHtml =this.label;  
    this.parentNode.rendered = true; 
    let index = Number(this.getAttribute("index"));    
    let domLength = this.parentNode.children.length;
    this.type=this.parentNode.type;
    // 默认第一个card显示及tab-pane active
    switch (index) {
      case 0:
        this.active = "active";
        this.className = "first"
        let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
        if(!card)return false;
        card.show=true;
        break;
    
      case domLength-1:
        this.className = "last"
        break;
    }
  
  } 
  // tab切换
  change(){  
    [...this.parentNode.children].forEach((val)=>{
      val.shadowRoot.querySelector(".ox-tab-pane").classList.remove("active")
    })
    this.shadowRoot.querySelector(".ox-tab-pane").classList.add("active")
    if(this.type !=="piece"){
      let index = this.getAttribute("index"); 
      this.parentNode.activebar = Number(index);  
    } 
    let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
    if(!card)return false;
    card.show=true; 
  } 
} 
window.customElements.define('ox-tab-pane', OXTabPane);