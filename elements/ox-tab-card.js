import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tab-card
 */
class OXTabCard extends PolymerElement {
  constructor() {
    super(); 
    
  }
  static get template() {
    return html `
    <style>
      .ox-tab-card{
        transition:all .5s;
      }
    </style> 
      <div class="ox-tab-card">  
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return {  
      //显示隐藏
      show:{
        type:Boolean,
        value:false,
        observer:'attrChange'
      },
    };
  }
  // 触发card切换
  attrChange(newVal,oldVal){ 
    if(oldVal === undefined) return false; 
    let siblingsNode = [...this.parentNode.children];
    siblingsNode.forEach((val)=>{
      if(val.tagName.toLowerCase() === "ox-tab-card"){
        val.style.display= "none"; 
        val.show=false;
      }
    })
    this.style.display= newVal?"block":"none";
  }
  ready() {
    super.ready();  
    this.style.display= this.show?"block":"none"; 
 
  }  
} 
window.customElements.define('ox-tab-card', OXTabCard);