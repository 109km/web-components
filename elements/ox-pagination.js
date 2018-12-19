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
        :host .ox-pagination-container {
          display: -webkit-flex;
          display: flex;
          align-items: center;
          -webkit-align-items: center;
        }
        :host .ox-pagination-container .disabled {
          cursor: not-allowed;
        }
        :host .ox-pagination-numer, :host .ox-pagination-numer li {
          margin: 0;
          padding: 0;
        }
        :host .ox-pagination-numer li {
          min-width: 36px;
          height: 36px;

          list-style: none;
          list-style-type: none;
          cursor: pointer;
          background: #fff;
          border-top: 1px solid #D1D1D1;
          border-bottom: 1px solid #D1D1D1;
          border-right: 1px solid #D1D1D1;

          text-align: center;
          line-height: 36px;
          font-size: 16px;
          color: #282828;
          font-weight: 400;
          vertical-align: middle;

          position: relative;
        }
        :host .ox-pagination-numer li.active {
          transition: all .3s;
          background-color: var(--theme-bg-color-primary);
          color: var(--theme-color-default);
          border-top: 1px solid var(--theme-bg-color-primary);
          border-bottom: 1px solid var(--theme-bg-color-primary);
          border-left: 1px solid var(--theme-bg-color-primary);
          margin-left: -1px;
          margin-right: -1px;
        }
        :host .ox-pagination-numer li:hover {
          background-color: var(--theme-bg-color-primary);
          color: var(--theme-color-default);
          transition: all .3s;
        }
        :host .ox-pagination-numer li.prev, :host .ox-pagination-numer li.back {
          font-size: 24px;
          line-height: 22px;
        }
        :host .ox-pagination-numer li.prev::before, :host .ox-pagination-numer li.back::before {
          content: "\\2026";
        }
        :host .ox-pagination-numer li.prev:hover::before {
          line-height: 30px;
          content: "\\00AB";
        }
        :host .ox-pagination-numer li.back:hover::before {
          line-height: 30px;
          content: "\\00BB";
        }
        :host .ox-pagination-pre,  :host .ox-pagination-next {
          min-width: 36px;
          height: 36px;
          border: 1px solid #D1D1D1;
          line-height: 36px;
          text-align: center;
          position: relative;
        }
        .ox-pagination-pre::before, .ox-pagination-pre::after, .ox-pagination-next::before, .ox-pagination-next::after {
          width: 2px;
          height: 11px;
          background-color: #D1D1D1;
          border-radius: 2px;
        }
        .ox-pagination-pre.active, .ox-pagination-next.active {
          cursor: pointer;
        }
        .ox-pagination-pre.active::before, .ox-pagination-pre.active::after,
        .ox-pagination-next.active::before, .ox-pagination-next.active::after {
          background-color: var(--theme-bg-color-primary);
        }
        .ox-pagination-pre::before, .ox-pagination-pre::after {
          left: 14px;
          content: '';
          position: absolute;
        }
        .ox-pagination-pre::before {
          top: 8px;
          transform: rotate(45deg);
        }
        .ox-pagination-pre::after {
          top: 15px;
          transform: rotate(-45deg);
        }
        .ox-pagination-next::before, .ox-pagination-next::after {
          left: 18px;
          content: '';
          position: absolute;
        }
        .ox-pagination-next::before {
          top: 8px;
          transform: rotate(-45deg);
        }
        .ox-pagination-next::after {
          top: 15px;
          transform: rotate(45deg);
        }
        :host .ox-pagination-pre {
          border-radius: 4px 0 0 4px;
          margin-right: 10px;
        }
        :host .ox-pagination-next {
          border-radius: 0 4px 4px 0;
          margin-left: 10px;
        }
        :host .ox-pagination-numer {
          display: -webkit-flex;
          display: flex;
          align-items: center;
          -webkit-align-items: center;
        }
        :host .ox-pagination-numer {
          border-left: 1px solid #D1D1D1;
        }
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
              <li class$="active [[item.data]]" on-click="pageHandler" data-other$="[[item.data]]" style$="[[defaultColor]]"
              >[[item.number]]</li>
            </template>
            <template is="dom-if" if="[[!item.active]]">
              <li class$="[[item.data]]" data-other$="[[item.data]]" on-mouseover="liMouseover" on-mouseout="liMouseout" on-click="pageHandler">[[item.number]]</li>
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
      backgroundColor: String
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
    if (this.backgroundColor) {
      this.defaultColor = `background-color: ${this.backgroundColor}; border-top: 1px solid ${this.backgroundColor}; 
      border-bottom: 1px solid ${this.backgroundColor}; border-left: 1px solid ${this.backgroundColor}`;
      let style = document.createElement("style");
      let nextTop = '';
      let nextBottom = '';
      nextTop = document.createTextNode(`.user-class.active:before {background-color: ${this.backgroundColor}}`);
      nextBottom = document.createTextNode(`.user-class.active:after {background-color: ${this.backgroundColor}}`);
      style.appendChild(nextTop);
      style.appendChild(nextBottom);
      this.shadowRoot.children[1].children[0].appendChild(style);
    } else {
      this.defaultColor = '';
    }
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
    if (value !== '') {
      this.page = parseInt(value);
      this.pageNumberInitHandler(e.target);
    } else  {
      if (e.target.getAttribute('data-other') === 'back') {
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
    let content = number;
    if (number === '...') {
      data = str;
      content = '';
    } else if (number === '...back') {
      content = '';
      data = str;
    }

    const obj = {
      active: false,
      number: content,
      data: data,
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
    const target = e.target;
    if (this.backgroundColor) {
      target.style.backgroundColor = this.backgroundColor;
      target.style.borderTop = `1px solid ${this.backgroundColor}`;
      target.style.borderBottom = `1px solid ${this.backgroundColor}`;
    }
  }

  liMouseout(e) {
    const target = e.target;
    if (this.backgroundColor) {
      target.style.backgroundColor = '';
      target.style.borderTop = '';
      target.style.borderBottom = '';
    }
  }

  onOk() {
    callback && callback();
  }
}

window.customElements.define('ox-pagination', OXPagination);