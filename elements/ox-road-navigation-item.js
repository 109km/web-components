import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-road-navigation-item
 */
class OXRoadNavItem extends PolymerElement {
  constructor() {
    super();
    this.addEventListener("mouseenter", (e) => {
    })
  }
  static get template() {
    return html`
    <style>
      .ox-road-navigation-main {
        color: #ccc;
      }
      .item {
        text-decoration: none;
        color: #ccc;
      }
      .item:hover {
        color: #333;
      }
      .active {
        color: #333;
      }
      .line {
        margin: 0 5px;
      }
    </style>
    <span inner-h-t-m-l={{navHtml}}></span>
    <a target="[[target]]" class="item" href="[[href]]">
      <slot></slot>
    </a>
    `;
  }
  static get properties() {
    return {
      content: {
        type: Array,
        value: []
      },
      separator: {
        type: String
      },
      params: {
        type: Array
      },
      href: {
        type: String
      },
      target: {
        type: String
      }
    };
  }
  toHtml() {
    const content = this.content;

    const navHtml = content && content.map((el, index, arr) => {
      let _href = `${el.href}?`
      let params = el.params || {};
      for ( var key in params ) {
        _href += `${key}=${params[key]}${this.separator}`
      }
      return `<a 
              on-mouseenter = onMouseenter
              class="${ el.isActive ? 'active item' : 'item' }" 
              style="${ el.isActive ? `color: ${el.activeColor}`: '' }"
              href="${ _href }" 
              target="_black">
              ${ el.text }</a>
              ${ index<arr.length-1 ? "<span class='line'>/</span>" : "" }`
    })

    this.navHtml = navHtml.join("");
  }
  onMouseenter (e) {
    console.log(e.target)
    e.target.style.color = this.content.activeColor; 
  }
  ready() {
    super.ready();

    console.log(this.content)
    this.toHtml();
  }
}

window.customElements.define('ox-road-nav-item', OXRoadNavItem);