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
        }  
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
    };
  } 
  change(){ 
    let index = this.getAttribute("index"); 
    this.parentNode.activebar = Number(index); 
    let card = document.querySelector(`ox-tab-card[oxcard=${this.oxtarget}]`);  
    if(!card)return false;
    card.show=true;
    this.oxClick(); 
  }
  oxClick(callback) {
    callback && callback();
  }
  
} 
window.customElements.define('ox-tab-pane', OXTabPane);