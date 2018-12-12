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
        @import '../elements/ox-menu-liuhao/ox-menu-liuhao.css';
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
            //导航类型
            type: {
                type: String,
                value: 'primary',
            },
            className: String,
            to: {
                type:String,
                value:''
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
        this.className = `ox-menu-${this.type}`;
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