import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-modal
 */
class OXMenu extends PolymerElement {
    constructor() {
        super();
    }
    static get template() {
        return html `
    <style>
        :host(.ox-menu-primary) .ox-menu-outer {
            background-color: var(--theme-color-primary);
            color:  #ffe0b7;
        }
        :host(.ox-menu-dark) .ox-menu-outer{
            background-color: var(--theme-color-dark);
            color:  var(--color-white);
        }
        :host(.ox-menu-light) .ox-menu-outer{
            background-color: var(--color-white);
            color:  var(--color-black);
            border-bottom:1px solid #e8e8e8;
            border-top: 1px solid #fafafc;
        }

        .clearfix:after {
            content: "";
            display: block;
            clear: both;
            overflow: hidden;
            font-size: 0;
            height: 0;
        }

        .fl {
            float: left;
        }

        .fr {
            float: right;
        }
        .ox-menu-inner{
            width: 1200px;
            margin:0 auto;
            box-sizing: border-box;
            padding:0 50px;
            height: 80px;
            overflow: hidden;
        }

        ::slotted(.logo){
            height: 40px;
            float: left;
            margin-top: 20px;
        }
        ::slotted(.menu-item){
            height: 50px;
            padding:0 15px;
            line-height: 50px;
            position: relative;
            float: left;
            margin: 15px 0 0 30px;
            cursor: pointer;
        }
        .menu-items{
            margin-left: 325px;
        }
        :host(.ox-menu-primary) ::slotted(.menu-item):after{
            content: ".";
            position: absolute;
            bottom: 0;
            left: 0;
            width:0; 
            height: 4px;
            background-color: var(--color-white);
        }
        :host(.ox-menu-dark) ::slotted(.menu-item):after{
            content: ".";
            position: absolute;
            bottom: 0;
            left: 0;
            width:0; 
            height: 4px;
            background-color: var(--theme-color-primary);
        }
        :host(.ox-menu-light) ::slotted(.menu-item):after{
            content: ".";
            position: absolute;
            bottom: 0;
            left: 0;
            width:0; 
            height: 4px;
            background-color: var(--theme-color-primary);
        }
        :host(.ox-menu-primary) ::slotted(.menu-item.active){
            color: var(--color-white);
        }
        :host(.ox-menu-dark) ::slotted(.menu-item.active){
            color: var(--theme-color-primary);
        }
        :host(.ox-menu-light) ::slotted(.menu-item.active){
            color: var(--theme-color-primary);
        }

        .ox-menu-outer ::slotted(.menu-item.active):after{
            width:100%; 
        }
        :host(.ox-menu-primary) ::slotted(.menu-item:hover){
            color: #fff;
        }
        :host(.ox-menu-dark) ::slotted(.menu-item:hover){
            color: var(--theme-color-primary);
        }
        :host(.ox-menu-light) ::slotted(.menu-item:hover){
            color: var(--theme-color-primary);
        }
        .ox-menu-outer ::slotted(.menu-item:hover):after{
            width:100%; 
            transition: all .25s linear;
        }
        ::slotted(.menu-my){
            height: 30px;
            width: 30px;
            border-radius: 50%;
            margin-top: 25px;
            float: right;
            cursor: pointer;
        }
    </style>
    <div class="ox-menu-outer">
      <div class="ox-menu-inner clearfix">
        <slot class="logo" name="logo"></slot>
        <div class="menu-items">
            <slot name="menu-item" on-click="selectItem"></slot>
        </div>
        <slot class="menu-my" name="menu-my"></slot>
      </div>
    </div>    
    `;
    }
    static get properties() {
        return {
            //导航类型 dark、light、primary;
            theme: {
                type: String,
                value: 'primary',
            },
            className: String,
            to: {
                type: String,
                value: ''
            }
        };
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback')
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback')
    }
    // attributeChangedCallback(){
    //     super.attributeChangedCallback();
    //     console.log('attributeChangedCallback')
    // }
    ready() {
        console.log('ready')
        super.ready();
        this.className = `ox-menu-${this.theme}`;
        // console.log(this.to)
        // location.href = this.to
    }
    selectItem(e) {
        console.log(e)
        let target = e.target.parentElement.children;
        for (let i = 0, len = target.length; i < len; i++) {
            if (target[i].nodeName == 'DIV') {
                target[i].className = 'menu-item'
            }
        }
        // e.target.className += ' active'
        e.target.classList.add('active')
    }
}

customElements.define('ox-menu', OXMenu);