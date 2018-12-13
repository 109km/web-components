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
    for (let i = 0; i < this.total; i++) {
      let obj = {};
      obj.active = false;
      obj.number = i + 1;
      if (obj.number === this.currentPage) {
        obj.active = true;
      }
      this.pagesNumber.push(obj);
    }
    
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
    this.currentPage = parseInt(e.target.innerHTML);
    this.pageNumberInitHandler();
  }

  onOk() {
    callback && callback();
  }

  bindEvents() {
    if (this.for.length > 0) {
      this.getForNode().addEventListener('click', function() {
        console.log('ssssssssss');
      }.bind(this));
    }
  }

  preHandler() {
    this.currentPage = this.currentPage - 1;
    this.pageNumberInitHandler();
  }

  nextHandler() {
    this.currentPage = this.currentPage + 1;
    this.pageNumberInitHandler();
  }

  pageNumberInitHandler() {
    for (let i = 0; i < this.pagesNumber.length; i++) {
      this.pagesNumber[i].active = false;
    }

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
    this.pagesNumber[this.currentPage - 1].active = true;
    this.pagesNumber = JSON.parse( JSON.stringify( this.pagesNumber) );
    console.log('currentPage:', this.currentPage);
    this.onOk();
  }
}

window.customElements.define('ox-pagination', OXPagination);
