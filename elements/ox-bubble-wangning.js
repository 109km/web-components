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
    //this.addEventListener('mouseenter', this.onMouseenter);
    //this.addEventListener('mouseleave', this.onMouseleave);
    // console.log(this.tagName);
  }
  static get template() {
    return html `
    <style>
      :host(.ox-bubble){
        display: inline-block;
        padding: 8px 20px;
        font-size: var(--theme-font-size);
        color: var(--color-white);
        background-color: var(--theme-color-primary);
        border-color: var(--theme-color-primary);
        position: relative;
        border-radius: var(--theme-button-radius);
        cursor: pointer;
      }
      :host(.ox-bubble:hover) .ox-bubble-inner{
        display:block;
      }
      .ox-bubble-inner{
        display:none;
        width:120px;
        position:absolute;
        border-radius: var(--theme-border-radius);
        z-index:1000;
      }
      ::slotted(.ox-bubble-content){
        padding:4px;
        color: var(--color-white);
        font-size: var(--theme-font-size-small);
        background-color: var(--mask-bg-color);
        border-radius: var(--theme-border-radius);
      }
      ::slotted(.ox-bubble-subtitle){
        padding:8px;
        font-weight:bold;
        color: var(--color-black);
        background: #c3c3ca;
        border-top-left-radius: var(--theme-border-radius);
        border-top-right-radius: var(--theme-border-radius);
      }
      .triangle{
        display:inline-block;
        width: 0;
        height: 0;
        border-width: 4px;
        border-style: solid;
        position: absolute;
      }
      :host([type='left']) .ox-bubble-inner{
        left: -128%;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
      }
      :host([type='left']) .triangle{
        border-color: transparent  transparent transparent var(--mask-bg-color);
        right: -6%;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
      }
      :host([type='right']) .ox-bubble-inner{
        right: -128%;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
      }
      :host([type='right']) .triangle{
        border-color: transparent var(--mask-bg-color) transparent transparent ;
        left: -6%;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
      }
      :host([type='top']) .ox-bubble-inner{
        left: 50%;
        bottom: 44px;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
      }
      :host([type='top']) .triangle{
        border-color:var(--mask-bg-color) transparent transparent transparent ;
        left: 50%;
        top: 98%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
      }
      :host([type='bottom']) .ox-bubble-inner{
        left: 50%;
        top: 44px;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
      }
      :host([type='bottom']) .triangle{
        border-color:transparent transparent var(--mask-bg-color) transparent ;
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
      }
      :host([mask]) .ox-bubble-inner{
        box-shadow: 0 2px 20px #ccc;
        -webkit-box-shadow: 0 2px 20px #ccc;
        -moz-box-shadow: 0 2px 20px #ccc;
        -ms-box-shadow: 0 2px 20px #ccc;
        -o-box-shadow: 0 2px 20px #ccc;
      }
      :host([mask]) ::slotted(.ox-bubble-content){
        padding:8px 8px 16px;
        color: var(--color-black);
        background: var(--modal-bg-color);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      :host([mask]) .triangle{
        border-width:8px;
      }
      :host([mask][type='left']) .triangle{
        right:-13%;
        border-color: transparent  transparent transparent var(--modal-bg-color);
      }
      :host([mask][type='right']) .triangle{
        left:-13.5%;
        border-color: transparent var(--modal-bg-color) transparent transparent ;
      }
      :host([mask][type='top']) .triangle{
        top:100%;
        border-color: var(--modal-bg-color) transparent transparent transparent ;
      }
      :host([mask][type='bottom']) .triangle{
        border-color: transparent transparent #c3c3ca transparent ;
      }
    </style>  
    <div class="ox-bubble-outer">
      {{title}}
      <div class="ox-bubble-inner">
        <slot class="ox-bubble-subtitle" name="subtitle"></slot>
        <slot class="ox-bubble-content" name="content"></slot>
        <span class="triangle"></span>
      </div>
    </div>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: '',
      },
      title: {
        type: String,
        value: '左方弹出',
      },
      direction: {
        type: String,
        value: 'left',
      }
    };
  }
  onMouseenter(e){
    console.log(this);
    let inner = this.shadowRoot.children[1].children[0];
    console.log(inner);
    inner.style.display = 'block';
  }
  onMouseleave(e){
    console.log(2);
    let inner = this.shadowRoot.children[1].children[0];
    console.log(inner);
    inner.style.display = 'none';
  }
  ready() {
    super.ready();
    this.className = `ox-bubble ox-bubble-${this.type}`;
  }
}

window.customElements.define('ox-bubble', OXBubble);