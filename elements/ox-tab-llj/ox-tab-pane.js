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
        @import '../elements/ox-tab-llj/ox-tab.css';
      </style>
      <div on-click="change" class="ox-tab-pane">  
        <slot></slot>
      </div>
    `;
  }
  static get properties() {
    return { 
      label:{
        type:String,
        value:"tabs"
      },
      oxtarget:{
        type:String, 
      }
    };
  }
  ready() {
    super.ready(); 
    let index = this.getAttribute("index");    
    if(index==0){ 
      let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
      if(!card)return false;
      card.show=true
    }
  } 
  change(){ 
    let index = this.getAttribute("index"); 
    this.parentNode.activebar = Number(index); 
    let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
    if(!card)return false;
    card.show=true
  }
  
} 
window.customElements.define('ox-tab-pane', OXTabPane);