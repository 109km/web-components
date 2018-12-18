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
        .ox-switch-outer {
            cursor: pointer;
            display: inline-block;
            width: 50px;
            height: 25px;
            border-radius: 15px;
            position: relative; 
            transition-duration: 0.8s;
            background-color: var(--theme-bg-color-default); 
            box-shadow: 0 0 5px rgb(221, 218, 218);
          }
          .ox-switch-inner {
            width: 21px;
            height: 21px;
            border-radius: 50%;
            position: absolute;
            left: 4px;
            top: 6%;
            transition-duration: 0.5s;
            transform:translateX(-10%);
            background-color: var(--color-white);
          }
          :host(.ox-switch-actived) .ox-switch-outer {
            transition-duration: 0.5s;
            background-color: var(--theme-bg-color-primary);
            box-shadow: 0 0 5px rgb(238, 176, 61);
          }
          :host(.ox-switch-actived) .ox-switch-inner {
            transition-duration: 0.5s;
            left: 30px;
          }
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
            console.log('关闭:',this.hasAttribute('checked'));
            this.removeAttribute('checked');
            this.className = '';
            this.checked = false;
          } else {
            this.checked = true;
            this.setAttribute('checked', true);
            this.className = 'ox-switch-actived';
            console.log('打开:',this.hasAttribute('checked'));
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