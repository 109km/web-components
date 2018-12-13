import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * @name ox-tab
 */
class OXTabContents extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html`
    <style>
      @import '../elements/ox-tab-wangfanglan/ox-tab.css';
    </style>

    <div class="ox-tab-contents">
      <slot></slot>
    </div>
    `;
  }
  static get properties() {
    return {
    };
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('ox-tab-contents', OXTabContents);