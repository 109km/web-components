import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';



class OXSwitch extends PolymerElement {
    constructor() {
        //必须首先调用super方法
        super();
        this.addEventListener('click',this.onClick);
    }
    //创建shadow dom
    static get template() {
        return html `
        <style>
            @import '../elements/ox-switch-wangdi/ox-switch-wangdi.css';
        </style>
            <div class="ox-switch-outer">
                <div class="ox-switch-inner"></div>
            </div>
          `
    }
    static get properties() {
        return {
            value:{
                type:String,
            },
            checked:{
                type:Boolean,
                value:false
            },
            disabled: {
                type: Boolean,
                value: false
            },
        }
    }
    ready() {
        super.ready();
    }
    onClick(e) {
        if (this.hasAttribute('disabled')) return;
        if (this.hasAttribute('checked')) {
            console.log(this.hasAttribute('checked'));
            this.removeAttribute('checked');
            this.className = '';
            this.checked = false;
          } else {
            this.checked = true;
            this.setAttribute('checked', true);
            this.className = 'ox-switch-actived';
          }
    }
       setDisabled() {
        this.setAttribute('disabled');
      }
    
      removeDisabled() {
        this.removeAttribute('disabled');
      }   
}
customElements.define('ox-switch', OXSwitch);