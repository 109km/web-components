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
    this.addEventListener('input', this.onChange);
  }
  static get template() {
    return html `
      <style>
        @import '../elements/ox-input-wangning/ox-input-wangning.css';
      </style> 
      <input type="{{type}}" placeholder="{{placeholder}}" disabled="{{disabled}}"/>
      <div class="ox-input-error-word">{{notice}}</div>
    `;
  }
  static get properties() {
    return {
      placeholder: {
        type: String,
        value:'11',
      },
      type: {
        type: String,
        value:'primary',
      },
      disabled: {
        type: Boolean,
        value:false,
      },
      notice: {
        type: String,
        value: '',
      }
    };
  }

  ready() {
    super.ready();
    this.className = `ox-input ox-input-${this.type}`;
  }
  onChange(e){
    var input = this.shadowRoot.querySelector('input');
    if(input.getAttribute('type') == 'tel'){
      console.log(input.value);
      if(!(/^1[0-9]{10}$/.test(input.value))){
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
}

window.customElements.define('ox-input', OXInput);