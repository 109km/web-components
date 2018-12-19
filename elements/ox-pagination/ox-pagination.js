import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/polymer/lib/elements/dom-if.js'


/**
 * @name ox-pagination
 */
class OXPagination extends PolymerElement {

  constructor() {
    super();
  }
  
  static get template() {
    return html`
      <style>
        @import '../elements/ox-pagination/ox-pagination.css';
      </style>
      <div class="ox-pagination-container">
        <template is="dom-if" if="[[preStatus]]">
          <div class="ox-pagination-pre active user-class" on-click="preHandler"></div>
        </template>
        <template is="dom-if" if="[[!preStatus]]">
          <div class="ox-pagination-pre disabled"></div>
        </template>
        <ul class="ox-pagination-numer">
          <template is="dom-repeat" items="[[pagesNumber]]">
            <template is="dom-if" if="[[item.active]]">
              <li
                class="active"
                on-click="pageHandler"
                style="background-color: [[backgroundColor]]; border-top: 1px solid [[backgroundColor]]; 
                border-bottom: 1px solid [[backgroundColor]]; border-left: 1px solid [[backgroundColor]];"
              >[[item.number]]</li>
            </template>
            <template is="dom-if" if="[[!item.active]]">
              <li on-mouseover="liMouseover" on-mouseout="liMouseout" on-click="pageHandler">[[item.number]]</li>
            </template>
          </template>
        </ul>
        <template is="dom-if" if="[[nextStatus]]">
          <div class="ox-pagination-next active user-class" on-click="nextHandler"></div>
        </template>
        <template is="dom-if" if="[[!nextStatus]]">
          <div class="ox-pagination-next disabled"></div>
        </template>
      </div>
    `;
  }

  static get createProperties() {
    return {
      pagesNumber: {
        type: Array
      },
      page: {
        type: Number
      },
      // 与按钮绑定
      for: {
        type: String,
        value: ''
      }
    }
  }

  ready() {
    super.ready();
    this.initUserClass();
    this._reset();
  }

  initUserClass() {
    // 渲染
    this.backgroundColor = this.getAttribute('background') || '';
    let style = document.createElement("style");
    let nextTop = '';
    let nextBottom = '';
    nextTop = document.createTextNode(`.user-class.active:before {background-color: ${this.backgroundColor}}`);
    nextBottom = document.createTextNode(`.user-class.active:after {background-color: ${this.backgroundColor}}`);
    style.appendChild(nextTop);
    style.appendChild(nextBottom);
    this.shadowRoot.children[1].children[0].appendChild(style);
  }

  _reset() {
    this.page = parseInt(this.getAttribute('defaultCurrent'));
    this.total = parseInt(this.getAttribute('total'));
    if (this.total > 10) {
      if (this.page <= 8) {
        this.preNumberInit();
      } else if (this.page > 8 && this.page < (this.total - 5)) {
        this.betweenNumberInit();
      } else {
        this.backNumberInit();
      }
    } else {
      this.numberLimitedTen();
    }
    // 前后按钮
    if (this.page === 1) {
      this.preStatus = false;
      this.nextStatus = true;
    } else if (this.page === this.total) {
      this.preStatus = true;
      this.nextStatus = false;
    } else {
      this.preStatus = true;
      this.nextStatus = true;
    }
  }

  pageHandler(e) {
    const value = e.target.innerHTML;
    if (!value.includes('...')) {
      this.page = parseInt(value);
      this.pageNumberInitHandler(e.target);
    } else  {
      if (value === '...back') {
        if (this.page + 5 >= this.total) {
          this.page = this.total;
          this.backNumberInit();
        } else if ((this.total - (this.page + 5)) < 5) {
          this.page = this.page + 5;
          this.backNumberInit();
        } else {
          this.page = this.page + 5;
          this.betweenNumberInit();
        }
      } else {
        if ((this.page - 5) <= 0) {
          this.page = 1;
          this.preNumberInit();
        } else if ((this.page - 5) < 5) {
          this.page = this.page - 5;
          this.preNumberInit();
        } else {
          this.page = this.page - 5;
          this.betweenNumberInit();
        }
      }
      this.pagesNumber = JSON.parse( JSON.stringify( this.pagesNumber) );
      this.onOk();
    }
  }

  pageNumberInitHandler(target) {
    // 处理页数渲染
    if (this.total > 10) {
      if (this.page < 5) {
        this.preNumberInit();
      } else if ((this.total - this.page) < 5) {
        this.backNumberInit();
      } else {
        this.betweenNumberInit();
      }
    } else {
      for (let i = 0; i < this.pagesNumber.length; i++) {
        this.pagesNumber[i].active = false;
        this.pagesNumber[this.page - 1].active = true;
      }
    }

    // 处理前进和后退
    if (this.page === 1) {
      this.preStatus = false;
      this.nextStatus = true;
    } else if (this.page === this.total) {
      this.preStatus = true;
      this.nextStatus = false;
    } else {
      this.preStatus = true;
      this.nextStatus = true;
    }
    
    this.pagesNumber = JSON.parse( JSON.stringify( this.pagesNumber) );
    this.onOk();
  }

  initOverObj(number, str = '') {
    let data = number;
    if (number === this.total) data = 8;
    if (number === '...') data = str;
    const obj = {
      active: false,
      number: number,
      data: data
    }
    this.pagesNumber.push(obj);
  }

  numberLimitedTen() {
    this.pagesNumber = [];
    for (let i = 0; i < this.total; i++) {
      let obj = {};
      obj.active = false;
      obj.number = i + 1;
      obj.data = i + 1;
      if (obj.number === this.page) {
        obj.active = true;
      }
      this.pagesNumber.push(obj);
    }
  }

  preNumberInit() {
    this.pagesNumber = [];
    for (let i = 0; i < 8; i++) {
      let obj = {};
      obj.number = i + 1;
      obj.data = i;
      obj.active = false;
      if (obj.number === this.page) obj.active = true;
      this.pagesNumber.push(obj);
    }
    this.initOverObj('...back', 'back');
    this.initOverObj(this.total);
  }

  betweenNumberInit(type = 0) {
    this.pagesNumber = [];
    this.initOverObj(1);
    this.initOverObj('...', 'prev');
    for (let i = 0; i < 6; i++) {
      let obj = {};
      obj.active = false;
      obj.data = i;
      if (i === 2) {
        obj.active = true;
        obj.number = this.page;
      } else if (i < 2) {
        obj.number = this.page - (2 - i );
      } else {
        obj.number = this.page + (i -  2);
      }
      this.pagesNumber.push(obj);
    }
    if (type !== 1) {
      this.initOverObj('...back', 'back');
      this.initOverObj(this.total);
    }
  }

  backNumberInit() {
    this.pagesNumber = [];
    this.initOverObj(1);
    this.initOverObj('...', 'prev');
    for (let i = 0; i < 8; i++)  {
      let obj = {};
      obj.number = this.total - 7 + i;
      obj.data = i;
      obj.active = false;
      if (this.page === obj.number) obj.active = true;
      this.pagesNumber.push(obj);
    }
  }

  preHandler() {
    this.page = this.page - 1;
    this.pageNumberInitHandler();
  }

  nextHandler() {
    this.page = this.page + 1;
    this.pageNumberInitHandler();
  }
  
  liMouseover(e) {
    if (this.backgroundColor) {
      e.target.style.backgroundColor = this.backgroundColor;
      e.target.style.borderTop = `1px solid ${this.backgroundColor}`;
      e.target.style.borderBottom = `1px solid ${this.backgroundColor}`;
    }
  }

  liMouseout(e) {
    if (this.backgroundColor) {
      e.target.style.backgroundColor = '';
      e.target.style.borderTop = '';
      e.target.style.borderBottom = '';
    }
  }

  onOk() {
    callback && callback();
  }
}

window.customElements.define('ox-pagination', OXPagination);
