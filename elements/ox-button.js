import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
/**
 * @name ox-button
 */
class OXButton extends PolymerElement {
  constructor() {
    super();
    this.addEventListener('click', this.onClick, false);
    this.addEventListener('mouseover', this.onHover, false);
  }
  static get template() {
    return html `
      <style>
        :host(.ox-button) a{
          display: inline-block;
          cursor: pointer;
          padding: 8px 20px;
          border-radius:var(--theme-button-radius);
          border: 1px solid transparent;
          text-decoration: none;
          text-align: center;
        }
        :host(.ox-button) .block{
          display: block;
        }
        :host(.ox-button-default) a{
          color: var(--color-black);
          background-color: var(--theme-color-default);
          border-color: var(--theme-color-default-border);
        }

        :host(.ox-button-default:active) a{
          color: var(--theme-color-primary);
          border-color: var(--theme-color-primary);
        }

        :host(.ox-button-primary) a{
          color: var(--color-white);
          background-color: var(--theme-color-primary);
          border-color: var(--theme-color-primary);
        }

        :host(.ox-button-primary:active) a{
          background-color: var(--theme-color-primary-active);
        }

        :host(.ox-button-text) a{
          color: var(--theme-color-primary);
        }

        :host(.ox-button-text:active) a{
          color: var(--theme-color-primary-active);
        }

        :host(.ox-button-success) a{
          color: var(--color-white);
          background-color: var(--theme-color-success);
          border-color: var(--theme-theme-color-success);
        }

        :host(.ox-button-success:active) a{
          background-color: var(--theme-color-success-active);
        }

        :host(.ox-button-warning) a{
          color: var(--color-white);
          background-color: var(--theme-color-warning);
          border-color: var(--theme-color-warning);
        }

        :host(.ox-button-warning:active) a{
          background-color: var(--theme-color-warning-active);
        }

        :host(.ox-button-error) a{
          color: var(--color-white);
          background-color: var(--theme-color-error);
          border-color: var(--theme-color-error);
        }

        :host(.ox-button-error:active) a{
          background-color: var(--theme-color-error-active);
        }

        :host(.ox-button-success-hollow) a{
          color: var(--theme-color-success);
          border-color: var(--theme-color-success);
        }

        :host(.ox-button-success-hollow:active) a{
          color: var(--theme-color-success-active);
          border-color: var(--theme-color-success-active);
        }

        :host(.ox-button-warning-hollow) a{
          color: var(--theme-color-warning);
          border-color: var(--theme-color-warning);
        }

        :host(.ox-button-warning-hollow:active) a{
          color: var(--theme-color-warning-active);
          border-color: var(--theme-color-warning-active);
        }

        :host(.ox-button-error-hollow) a{
          color: var(--theme-color-error);
          border-color: var(--theme-color-error);
        }

        :host(.ox-button-error-hollow:active) a{
          color: var(--theme-color-error-active);
          border-color: var(--theme-color-error-active);
        }
      </style>
      <a href$="[[href]]" target$="[[target]]" class$="[[class]]">
        <slot></slot>
      </a>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'primary',
      },
      class: String,
      disabled: Boolean,
      href: String,
      target: String,
      onClick: Function,
      block: Boolean
    };
  }
  ready() {
    super.ready();
    this.className = `ox-button ox-button-${this.type}`;
    this.handleAttrBlock();
  }
  handleAttrBlock() {
    this.block ? (this.class = 'block') : false;
  }
  // `click` event handler 
  onClick(e) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
  }
  // `mouseover` event handler
  onHover(e) {}
}

window.customElements.define('ox-button', OXButton);