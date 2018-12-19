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
            :host([required]) {
                position: relative;
            }
            .ox-input-shadow {
                width: 190px;
                height: 25px;
                border: none;
                border-radius: 4px;
                padding-left: 10px;
                outline: none;
            }
            .ox-input {
                width: 200px;
                height: 22px;
                border-radius: 4px;
                -webkit-appearance: none;
            }
            .search-input {
                width: 300px;
                height: 22px;
                border-radius: 4px;
                -webkit-appearance: none;
            }
            #error-message{
                color: red;
                font-size:var(--theme-font-size-small);
                position: absolute;
                top:100%;
                width: 100%;
                height: 20px;
                line-height: 20px;
                display: none;
                margin-top:5px;
            }
           :host(.input-box){
                border: none !important;
                border: 1px solid rgb(236, 61, 61) !important;
                box-shadow:0 0 5px rgb(235, 99, 99) !important;
            }
            .active{
                display: block !important;  
            }
            .unactive{
                display: none !important;
            }
        </style>
           <input type="text" placeholder="{{placeholder}}" class="ox-input-shadow"  disabled="{{disabled}}" required="{{required}}" on-Change="onChange"> 
           <div id="error-message"></div>
           `
    }
    static get properties() {
        return {
            placeholder:{
                type:String,
            },
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
            },
            type: {
                type: String,
                value: 'default',
                observer: '_determineType'
              }
        }
    }
    ready() {
        super.ready();
    }
    onChange(e) {
        if (this.hasAttribute('disabled')) return;
        if (this.hasAttribute('required')) {
                this.value = e.target.value;
                let errormsg = this.shadowRoot.querySelector('#error-message');
                errormsg.className = 'unactive';
                this.className = '';
                let inputType = this.type;
            if(inputType == "Phone"){
                //正则验证手机
                if(!(/^1[34578]\d{9}$/.test(this.value))){
                        errormsg.className = 'active';
                        errormsg.innerText = '请输入正确手机号**'
                        this.className = 'input-box'
                }else{
                    errormsg.className = 'unactive';
                    this.className = '';
                }
            }else if(inputType == "Email"){
                // 正则验证电子邮箱
                if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.value))){
                    errormsg.className = 'active';
                    errormsg.innerText = '请在电子邮箱中包括@**，'
                    this.className = 'input-box';
                }else{
                    errormsg.className = 'unactive';
                    this.className = '';
                }
            }else if(inputType == "Url"){
                // 正则验证URL
                if(!(/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(this.value))){
                    errormsg.className = 'active';
                    errormsg.innerText = '请输入网址包含http://**，'
                    this.className = 'input-box';
                }else{
                    errormsg.className = 'unactive';
                    this.className = '';
                }
            }else{
                errormsg.className = 'unactive';
                this.className = '';
            }
        }
        // console.log(this.value);
    }
    setDisabled() {
        this.setAttribute('disabled');
    }
    removeDisabled() {
        this.removeAttribute('disabled');
    }

    _determineType() {
        console.log('determinetype：', this.type);
      }

}
customElements.define('ox-input', OXInput);