import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-bubble
 */
class OXBubble extends PolymerElement {
  constructor() {
    super();
    //hasTitle();
  }
  static get template() {
    return html `
  <style>
  :host(ox-bubble){
      display: inline-block;
      text-align: center;
      position: relative;
      box-sizing: border-box;
    }
  :host(ox-bubble-main){
      color: var(--color-white);
      background-color: #DA9D55;
      display: block;
      cursor: pointer;
      border-radius: 2px;
      padding: 8px 15px;
    }
  :host(ox-bubble-alert){
      padding: 3px 15px;
      color: #fff;
      background: #333333;
      border-radius: 3px;
      position: absolute;
      z-index: 100;
      font-size: 12px;
      line-height: 20px;
      white-space:nowrap;
    }
  :host(.ox-bubble-alert-left){
      top: 50%;
      transform: translateY(-50%);
      left: -110%;
    }
  :host(.ox-bubble-alert-right){
      top: 50%;
      transform: translateY(-50%);
      right: -110%;
    }
  :host(.ox-bubble-alert-top){
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
    }
  :host(.ox-bubble-alert-bottom){
      top: 45px;
      left: 50%;
      transform: translateX(-50%);
    }


  .triangle{
      width: 0;
      height: 0;
      border-width: 6px;
      border-style: solid;
      position: absolute;
      z-index: -1;
    }
  .triangle-left{
      border-color: transparent  transparent transparent #333333;
      right: -9%;
      top: 50%;
      transform: translateY(-50%);
    }
  .triangle-right{
      border-color: transparent  #333333 transparent transparent ;
      left: -9%;
      top: 50%;
      transform: translateY(-50%);
    }
  .triangle-top{
      border-color: #333333 transparent  transparent transparent ;
      transform: translateX(-50%);
      top: 100%;
      left: 50%;
    }
  .triangle-bottom{
      border-color: transparent transparent #333333 transparent;
      transform: translateX(-50%);
      bottom: 100%;
      left: 50%;
    }
  .wrap{
      width: 100px;
      white-space: normal;
    }
  .title{
      background: #E9E9E9;
      width: 130%;
      position: relative;
      left: -15px;
      top: -3px;
      color: #333;
    }
  </style>
        <div class="ox-bubble">
            <slot></slot>
        </div>
    `;
  }
  static get properties() {
    return {
      oxClass:{
        type:String,
        value: '',
      }
    };
  }

  ready() {
    super.ready();
    this.className = `ox-bubble ${this.oxClass}`;
  }
}

customElements.define('ox-bubble', OXBubble);