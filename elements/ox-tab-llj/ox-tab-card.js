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
      <div class="ox-tab-card">  
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return {  
      show:{
        type:Boolean,
        value:false,
        observer:'attrChange'
      }
    };
  }
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