
  import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';



class OXInput extends PolymerElement {
    constructor(){
        //必须首先调用super方法
        super();
        // this.addEventListener('onblur',this.onBlur);
        // console.log(this.tagName);
    }
    //创建shadow dom
    static get template(){
        return html`
        <style>
            @import '../elements/ox-input/ox-input.css'
        </style>
           <input type="text" placeholder="请输入" class="ox-input-shadow" on-change="onBlur">
        ` 
    }
    static get properties(){
      return {
        value: {
            type: String
          }
      }
    }
    ready(){
        super.ready();
        console.log('input-element created!');
    }
    onBlur(e){
        // console.log("aaa");
        if (this.hasAttribute('disabled')) return;
        // console.log(this)
        // const content = this.innerHTML;
        // console.log(content);
        // console.log('此选项值为' +  this.value);
        console.log(this.className);
    }
    setDisabled(){
        this.setAttribute('disabled');
      }
      removeDisabled(){
        this.removeAttribute('disabled');
      }

}
customElements.define('ox-input',OXInput);
  