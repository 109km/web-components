import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/polymer/lib/elements/dom-if.js'


/**
 * @name ox-pagination
 */
class OXPagination extends PolymerElement {

  constructor() {
    super();
    this._reset();
  }
  
  static get template() {
    return html`
      <style>
        @import '../elements/ox-pagination/ox-pagination.css';
      </style>
      <div class="ox-pagination-container">
        <template is="dom-if" if="{{preStatus}}">
          <div class="ox-pagination-pre active" on-click="preHandler"></div>
        </template>
        <template is="dom-if" if="{{!preStatus}}">
          <div class="ox-pagination-pre disabled"></div>
        </template>
        <ul class="ox-pagination-numer">
          <template is="dom-repeat" items="{{pagesNumber}}">
            <template is="dom-if" if="{{item.active}}">
              <li class="active" on-click="pageHandler">{{item.number}}</li>
            </template>
            <template is="dom-if" if="{{!item.active}}">
              <li on-click="pageHandler">{{item.number}}</li>
            </template>
          </template>
        </ul>
        <template is="dom-if" if="{{nextStatus}}">
          <div class="ox-pagination-next active" on-click="nextHandler"></div>
        </template>
        <template is="dom-if" if="{{!nextStatus}}">
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
      currentPage: {
        type: Number
      },
      // 与按钮绑定
      for: {
        type: String,
        value: ''
      }
    }
  }

  _reset() {
    this.currentPage = parseInt(this.getAttribute('defaultCurrent'));
    this.total = parseInt(this.getAttribute('total'));
    this.pagesNumber = [];
    if (this.total > 10) {
      for (let i = 0; i < 8; i++) {
        let obj = {};
        obj.active = false;
        obj.number = i + 1;
        obj.data = i + 1;
        if (obj.number === this.currentPage) {
          obj.active = true;
        }
        this.pagesNumber.push(obj);
      }
      this.initOverObj('...');
      this.initOverObj(this.total);
    } else {
      for (let i = 0; i < this.total; i++) {
        let obj = {};
        obj.active = false;
        obj.number = i + 1;
        obj.data = i + 1;
        if (obj.number === this.currentPage) {
          obj.active = true;
        }
        this.pagesNumber.push(obj);
      }
    }
    // 前后按钮
    if (this.currentPage === 1) {
      this.preStatus = false;
      this.nextStatus = true;
    } else if (this.currentPage === this.total) {
      this.preStatus = true;
      this.nextStatus = false;
    } else {
      this.preStatus = true;
      this.nextStatus = true;
    }
  }

  ready() {
    console.log(this.id);
    super.ready();
  }

  pageHandler(e) {
    const value = e.target.innerHTML;
    if (value !== '...') {
      this.currentPage = parseInt(value);
      this.pageNumberInitHandler(e.target);
    } else  {
      console.log('value:', value);
      console.log(this.total - this.currentPage + 9);
      if (this.total - this.currentPage <= 5 || this.currentPage + 9 >= this.total || (this.total - (this.currentPage + 9)) < 5) {
        console.log('1111111111111111', this.total - this.currentPage, this.currentPage + 9);
        this.currentPage = this.currentPage + 9;
        this.pagesNumber = [];
        this.initOverObj(1);
        this.initOverObj('...', 'prev');
        for (let i = 0; i < 8; i++)  {
          let obj = {};
          obj.number = (this.total - 7) + i;
          obj.data = i;
          obj.active = false;
          if (this.currentPage === obj.number) obj.active = true;
          this.pagesNumber.push(obj);
        }
      } else {
        console.log('222222222222222');
        this.currentPage = this.currentPage + 9;
        this.pagesNumber = [];
        this.initOverObj(1);
        this.initOverObj('...', 'prev');
        for (let i = 0; i < 6; i++) {
          let obj = {};
          obj.active = false;
          obj.data = i;
          if (i === 2) {
            obj.active = true;
            obj.number = this.currentPage;
          } else if (i < 2) {
            obj.number = this.currentPage - (2 - i );
          } else {
            obj.number = this.currentPage + (i -  2);
          }
          this.pagesNumber.push(obj);
        }
        if (this.total - this.currentPage <= 4) {
  
        } else {
          this.initOverObj('...', 'back');
        }
        console.log('this.currentPage：', this.currentPage );
        this.initOverObj(this.total);
      }
    }
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

  onOk() {
    callback && callback();
  }

  preHandler() {
    this.currentPage = this.currentPage - 1;
    this.pageNumberInitHandler();
  }

  nextHandler() {
    this.currentPage = this.currentPage + 1;
    this.pageNumberInitHandler();
  }

  pageNumberInitHandler(target) {
    // 处理页数渲染
    if (this.total > 10) {
      if (this.currentPage < 8) {
        this.pagesNumber = [];
        for (let i = 0; i < 8; i++)  {
          let obj = {};
          obj.number = i + 1;
          obj.data = i;
          obj.active = false;
          if (this.currentPage === obj.number) obj.active = true;
          this.pagesNumber.push(obj);
        }
        this.initOverObj('...', 'back');
        this.initOverObj(this.total);
      } else if ((this.total - this.currentPage) < 5) {
        this.pagesNumber = [];
        this.initOverObj(1);
        this.initOverObj('...', 'prev');
        for (let i = 0; i < 8; i++)  {
          let obj = {};
          obj.number = this.total - 7 + i;
          obj.data = i;
          obj.active = false;
          if (this.currentPage === obj.number) obj.active = true;
          this.pagesNumber.push(obj);
        }
      } else if (this.currentPage - 5 >= 0 && this.total - this.currentPage >= 5 ) {
        this.pagesNumber = [];
        this.initOverObj(1);
        this.initOverObj('...', 'prev');
        for (let i = 0; i < 6; i++) {
          let obj = {};
          obj.active = false;
          obj.data = i;
          if (i === 2) {
            obj.active = true;
            obj.number = this.currentPage;
          } else if (i < 2) {
            obj.number = this.currentPage - (2 - i );
          } else {
            obj.number = this.currentPage + (i -  2);
          }
          this.pagesNumber.push(obj);
        }
        this.initOverObj('...', 'back');
        this.initOverObj(this.total);
      } else {
        console.log('........................');
      }
    } else {
      for (let i = 0; i < this.pagesNumber.length; i++) {
        this.pagesNumber[i].active = false;
        this.pagesNumber[this.currentPage - 1].active = true;
      }
    }

    // 处理前进和后退
    if (this.currentPage === 1) {
      this.preStatus = false;
      this.nextStatus = true;
    } else if (this.currentPage === this.total) {
      this.preStatus = true;
      this.nextStatus = false;
    } else {
      this.preStatus = true;
      this.nextStatus = true;
    }
    
    this.pagesNumber = JSON.parse( JSON.stringify( this.pagesNumber) );
    console.log('currentPage:', this.currentPage);
    this.onOk();
  }
}

window.customElements.define('ox-pagination', OXPagination);
