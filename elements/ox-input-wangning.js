import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-input
 */
class OXInput extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('blur', this.onBlur);
  }
  static get template() {
    return html `
      <style>
        :host(.ox-input){
          display:inline-block;
          width:200px;
          height:32px;
          position:relative;
          border-radius: 4px;
          border:1px solid #e8e8e8; 
        }
        :host(.ox-input) input{
          display:block;
          width:100%;
          height:100%;
          text-indent:10px;
          padding:0;
          font-size: var(--theme-font-size);
          border-radius:4px;
          border:none;
          outline:none;
        }
        input[type=search]::-webkit-search-cancel-button{
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          position: relative;
          border-radius:50%;
          background: var(--mask-bg-color) url("../assets/images/close.png")no-repeat center center;
          background-size: 8px 8px;
          cursor:pointer;
        }
        ::slotted(.ox-input-error-word){
          display:none;
          padding-top:4px;
          font-size: var(--theme-font-size-small);
          color: var(--theme-color-error);
        }
        :host([error]){
          border: 1px var(--theme-color-error) solid;
        }
        :host([error]) ::slotted(.ox-input-error-word){
          display: block;
        }
        :host([disabled]) input{
          cursor: not-allowed;
        }
        ::slotted(.ox-input-search-icon){
          left:10px;
          top:8px;
          color:#b3b3b3;
          position: absolute;
          font-size: var(--theme-font-size-small);
        }
        :host(.ox-input-search){
          width:360px;
          padding-left:30px;
        }
      </style> 
      <input type="{{type}}" placeholder="{{placeholder}}" disabled="{{disabled}}"/>
      <slot class="ox-input-error-word" name="notice"></slot>
      <slot class="ox-input-search-icon" name="icon"></slot>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value:'text',
      },
      disabled: {
        type: Boolean,
        value:false,
      },
      fontsize: String,
      color: String,
      cursorcolor: String,
      placeholder: String,
      error: String,
    };
  }
  ready() {
    super.ready();
    this.onStyle();
    this.className = `ox-input ox-input-${this.type}`;
  }
  onBlur(e){
    var input = this.shadowRoot.querySelector('input');
    if(input.getAttribute('type') == 'tel'){
      console.log(input.value);
      if(!(/^1[3,5,8,9,4,6,7]\d{9}$/.test(input.value))){
        console.log('错误');
        this.setAttribute('error','');
      }else{
        this.removeAttribute('error');
      }
    }else if(input.getAttribute('type') == 'email'){
      if(!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(input.value))){
        console.log('错误');
        this.setAttribute('error','');
      }else{
        this.removeAttribute('error');
      }
    }else if(input.getAttribute('type') == 'url'){
      if(!(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(input.value))){
        console.log('错误');
        this.setAttribute('error','');
      }else{
        this.removeAttribute('error');
      }
    }
  }
  onValue(e){
    return this.shadowRoot.querySelector('input').value;
  }
  onStyle(e){
    this.shadowRoot.querySelector('input').style.fontSize = `${this.fontsize}`;
    this.shadowRoot.querySelector('input').style.color = `${this.color}`;
    this.shadowRoot.querySelector('input').style.caretColor = `${this.cursorcolor}`;
  }
}

window.customElements.define('ox-input', OXInput);