import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-road-navigation
 */
class OXRoadNav extends PolymerElement {
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
    <div class="ox-road-navigation-main" inner-h-t-m-l={{navHtml}}>
      
    </div>
    `;
  }
  static get properties() {
    return {
      content: {
        type: Array,
        value: []
      }
    };
  }
  toHtml() {
    const { content } = this;

    const navHtml = content && content.map((el, index, arr) => {

      return `<a 
              on-mouseenter = onMouseenter
              class="${ el.isActive ? 'active item' : 'item' }" 
              style="${ el.isActive ? `color: ${el.activeColor}`: '' }"
              href="${ el.href }" 
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
    this.toHtml();
  }
}

window.customElements.define('ox-road-nav', OXRoadNav);