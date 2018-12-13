import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tab
 */
class OXTab extends PolymerElement {
  constructor() {
    super();
    // this.addEventListener('click', this.onClick);
  }
  static get template() {
    return html`
    <style>
      @import '../elements/ox-tab/ox-tab.css';
    </style>
    <div class="ox-tab-main" on-click=onClick inner-h-t-m-l={{tabHtml}}>
      
    </div>
    <div class="ox-tab-content-main" inner-h-t-m-l={{contentHtml}}>

    </div>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: "tab_1"
      },
      content: {
        type: String,
        value: ""
      },
      tab: {
        type: String,
        value: ""
      }
    };
  }
  tabToHtml(index = 0) {
    const tab = this.tab.split(","),
          className = (this.type === "tab_2") ? "tab-item-1" : "tab-item";
    let html = "";
    tab.map( (el, i) => {
      if (index === i) {
        html += `<div data-index="${i}" class="${className} active">${el}</div>`
      } else {
        html += `<div data-index="${i}" class="${className}">${el}</div>`
      }
      
    })

    this.tabHtml = html;
  }
  contentToHtml(index=0) {
    const content = this.content.split(",");

    this.contentHtml = content[index];
  }
  onClick(e) {
    const index = Number(e.target.getAttribute("data-index"));
    this.contentToHtml(index);
    this.tabToHtml(index);
  }
  ready() {
    this.tabToHtml();
    this.contentToHtml();


    super.ready();
  }
}

window.customElements.define('ox-tab', OXTab);