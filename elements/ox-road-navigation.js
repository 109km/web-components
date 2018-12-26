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
    <div class="ox-road-navigation-main">
      <ox-road-nav-item separator={{separator}} content={{content}}></ox-road-nav-item>
      <slot></slot>
    </div>
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
      }
    };
  }
  
  onMouseenter (e) {
    console.log(e.target)
    e.target.style.color = this.content.activeColor; 
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('ox-road-nav', OXRoadNav);