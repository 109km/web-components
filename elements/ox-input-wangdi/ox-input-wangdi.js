import {
    PolymerElement,
    html
} from '@polymer/polymer/polymer-element.js';



class OXInput extends PolymerElement {
    constructor() {
        //必须首先调用super方法
        super();
        // this.addEventListener('onblur',this.onBlur);
        // console.log(this.tagName);
        this.mode = 'auto';
        this.data = {};
    }
    //创建shadow dom
    static get template() {
        return html `
        <style>
            @import '../elements/ox-input-wangdi/ox-input-wangdi.css';
        </style>
           <input type="text" placeholder="请输入" class="ox-input-shadow"  disabled="{{disabled}}" required="{{required}}" on-blur="onBlur" on-keyup="onKey"> 
           `
        //   <slot class="error-message">輸入有誤</slot>

    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false
            },
            required: {
                type: Boolean,
                value: true
            },
            validate: {
                type: Boolean,
                value: false
            }
        }
    }
    ready() {
        super.ready();
        console.log('input-element created!');
    }
    onBlur(e) {
        if (this.hasAttribute('disabled')) return;
        if (this.hasAttribute('required')) {
            console.log('required:', this.hasAttribute('required'));
            console.log(this);
        }
    }
    onKey(e) {
        e.target.value = e.target.value.replace(/[^\d]/g,'')
        const {value} = e.target;
        console.log(value);
    }
    setDisabled() {
        this.setAttribute('disabled');
    }
    removeDisabled() {
        this.removeAttribute('disabled');
    }

}
customElements.define('ox-input', OXInput);