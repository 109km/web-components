import {
    html,
    PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-modal
 */
class OXSubMenu extends PolymerElement {
    constructor() {
        super();
        // this.addEventListener('click',this.onClick)
    }
    static get template() {
        return html `
    <style>
    @import '../elements/ox-menu-liuhao/ox-submenu-liuhao.css';
    @import '../assets/css/font-awesome.min.css';
    </style>
    <div class="ox-submenu-outer">
        <div class="submenu-title-wrap clearfix" on-click="onClick">
            <slot name="submenu-icon"></slot>
            <span class="submenu-title">[[title]]</span>
            <i class="fa fa-angle-down"></i>
        </div>
        <slot name="submenu-item" on-click="selectItem"></slot>
    </div>    
    `;
    }
    static get properties() {
        return {
            //导航类型 dark、light;
            theme: {
                type: String,
                value: 'light',
            },
            className: String,
            to: {
                type: String,
                value: ''
            },
            // submenu的title
            title:{
                type:String,
                value:'导航'
            },
            isclick:{
                type:Boolean,
                value:true
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
        this.classList.add(`ox-submenu-${this.theme}`);
        // console.log(this.classList)
        // console.log(this.to)
        // location.href = this.to
    }
    onClick(e){
        // console.log(e)
        let target = this.shadowRoot.children;
        let siblings = this.parentNode.children;
        // let s = this.parentNode.children;
        // console.log(s)

        target[1].classList.add('active')
        // console.log(this.isclick)
        if(this.isclick){
            for(var i = 0,len = siblings.length;i < len; i++){
                if(siblings[i] != this){
                    siblings[i].shadowRoot.children[1].classList.remove('active')
                }
            }
            this.isclick = !this.isclick;
        }else{
            this.shadowRoot.children[1].classList.remove('active')
            this.isclick = !this.isclick;
        }
        
        // console.log(siblings == this)
        // for(var i = 0, len = siblings.length; i < len;i++){
        //     console.log(siblings[i].shadowRoot)
        // }
    }
    selectItem(e,i,callback){
        // console.log(e,i,callback)
        var children = e.target.parentNode.children;
        for(var i = 0, len = children.length; i < len; i++){
            if(children[i].classList.contains('submenu-item')){
                if(children[i] == e.target){
                    children[i].classList.add('active')
                }else{
                    children[i].classList.remove('active')
                }
            }
        }
        callback&&callback()
    }

}

customElements.define('ox-submenu', OXSubMenu);