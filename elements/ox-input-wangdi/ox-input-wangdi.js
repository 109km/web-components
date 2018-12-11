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
           <input type="text" placeholder="请输入" class="ox-input-shadow"  disabled="{{disabled}}" required="{{required}}" on-Change="onChange"> 
           <div id="error-message">请输入正确手机号**</div>
           `
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false
            },
            required: {
                type: Boolean,
                value: false
            },
            validate: {
                type: Boolean,
                value: false
            },
            value:{
                type:Number,
            }
        }
    }
    ready() {
        super.ready();
        console.log('input-element created!');
        console.log(this.value);
    }
    onChange(e) {
        if (this.hasAttribute('disabled')) return;
        if (this.hasAttribute('required')) {
            console.log('required:', this.hasAttribute('required'));
            this.value = e.target.value;
            console.log(this.value);
            let errormsg = this.shadowRoot.querySelector('#error-message');
            errormsg.className = 'unactive';
            if(!(/^1[34578]\d{9}$/.test(this.value))){
                errormsg.className = 'active';
                console.log(this.tagName);
            }
        }
    }
    setDisabled() {
        this.setAttribute('disabled');
    }
    removeDisabled() {
        this.removeAttribute('disabled');
    }
}
customElements.define('ox-input', OXInput);