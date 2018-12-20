import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';


class OXSwitch extends PolymerElement {
    constructor() {
        super();
        this.addEventListener('click', this.onClick);
    }
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
          :host([disabled]){
            cursor: not-allowed;
          }
          :host([disabled]) .ox-switch-outer{
            cursor: not-allowed;
            display: inline-block;
            box-shadow: 0 0 5px rgb(221, 218, 218);
            opacity:0.5;
          } 
        </style>
            <div class="ox-switch-outer">
                <div class="ox-switch-inner"></div>
            </div>
          `
    }
    static get properties() {
        return {
            value: {
                type: String,
            },
            checked: {
                type: Boolean,
                value: false,
                observer: '_checkedChanged'
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
            console.log('关闭:', this.hasAttribute('checked'));
            this.removeAttribute('checked');
            this.className = '';
            this.checked = false;
        } else {
            this.checked = true;
            this.setAttribute('checked', true);
            this.className = 'ox-switch-actived';
            console.log('打开:', this.hasAttribute('checked'));
        }
    }
    setDisabled() {
        this.setAttribute('disabled');
    }
    removeDisabled() {
        this.removeAttribute('disabled');
    }
    _checkedChanged(newValue, oldValue) {
        // console.log("目前状态",newValue,"之前状态",oldValue);
        if(newValue){
            // console.log("打开状态事件")
        }else{
            // console.log("关闭状态事件")
        }
      }
}
customElements.define('ox-switch', OXSwitch);