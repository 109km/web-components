import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tag
 */
class OXTag extends PolymerElement {
  constructor() {
    super(); 
  }
  static get template() {
    return html `
      <style> 
        :host(.ox-tag) { 
          background:var(--my-elem-color, rgba(217,159,83,1));
          border-radius:4px;
          font-size:13px; 
          color:rgba(255,255,255,1);
          line-height:18px;
          padding: 4px 12px;
          cursor: pointer;
          position: relative;
        }
        .delete {
          position: absolute;
          right:6px;
          top:6px;  
          height:14px;
          width:14px;
          background:rgba(155,155,155,1);
          border-radius: 50%;
          color: #fff;
          text-align: center;   
          display: none;
          box-sizing:border-box;
        } 
        .delete::after{
          content:"×";
          position: absolute;
          top:0px;
          left:2px; 
          font-size: 12px;
          line-height: 1; 
        }
        :host(.ox-tag-delete) {
          padding-right: 28px;
          color: #333333;
          background: #E9E9E9;
          position: relative;
        }
        :host(.ox-tag-delete) .delete {
            display: block; 
 }
      </style>
      <slot></slot>
      <span on-click="hide" class="delete"></span>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'default',
      },  
    };
  }
  ready() {
    super.ready();
    this.className = `ox-tag ox-tag-${this.type}`;  
  }
  hide() {
    if(!this.getAttribute("class").includes("delete")) return false;
    this.style.display = "none" ;
    this.delete();
  } 
  delete(callback){
    callback&&callback()
  }
} 
window.customElements.define('ox-tag', OXTag);