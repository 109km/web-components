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
    this.addEventListener('click', this.toggle);
  }
  static get template() {
    return html `
      <style>
        :host(.ox-button) {
          display: inline-block;
          cursor: pointer;
          padding: 8px 20px;
          border-radius:var(--theme-border-radius);
          border: 1px solid transparent;
        }

        :host(.ox-button-default) {
          color: var(--color-black);
          background-color: var(--theme-color-default);
          border-color: var(--theme-color-default-border);
        }

        :host(.ox-button-default:active) {
          color: var(--theme-color-primary);
          border-color: var(--theme-color-primary);
        }

        :host(.ox-button-primary) {
          color: var(--color-white);
          background-color: var(--theme-color-primary);
          border-color: var(--theme-color-primary);
        }

        :host(.ox-button-primary:active) {
          background-color: var(--theme-color-primary-active);
        }

        :host(.ox-button-text) {
          color: var(--theme-color-primary);
        }

        :host(.ox-button-text:active) {
          color: var(--theme-color-primary-active);
        }

        :host(.ox-button-success) {
          color: var(--color-white);
          background-color: var(--theme-color-success);
          border-color: var(--theme-theme-color-success);
        }

        :host(.ox-button-success:active) {
          background-color: var(--theme-color-success-active);
        }

        :host(.ox-button-warning) {
          color: var(--color-white);
          background-color: var(--theme-color-warning);
          border-color: var(--theme-color-warning);
        }

        :host(.ox-button-warning:active) {
          background-color: var(--theme-color-warning-active);
        }

        :host(.ox-button-error) {
          color: var(--color-white);
          background-color: var(--theme-color-error);
          border-color: var(--theme-color-error);
        }

        :host(.ox-button-error:active) {
          background-color: var(--theme-color-error-active);
        }

        :host(.ox-button-success-hollow) {
          color: var(--theme-color-success);
          border-color: var(--theme-color-success);
        }

        :host(.ox-button-success-hollow:active) {
          color: var(--theme-color-success-active);
          border-color: var(--theme-color-success-active);
        }

        :host(.ox-button-warning-hollow) {
          color: var(--theme-color-warning);
          border-color: var(--theme-color-warning);
        }

        :host(.ox-button-warning-hollow:active) {
          color: var(--theme-color-warning-active);
          border-color: var(--theme-color-warning-active);
        }

        :host(.ox-button-error-hollow) {
          color: var(--theme-color-error);
          border-color: var(--theme-color-error);
        }

        :host(.ox-button-error-hollow:active) {
          color: var(--theme-color-error-active);
          border-color: var(--theme-color-error-active);
        }
      </style>
      <slot></slot>
    `;
  }
  static get properties() {
    return {
      type: {
        type: String,
        value: 'primary',
      }
    };
  }
  ready() {
    super.ready();
    this.className = `ox-button ox-button-${this.type}`;
  }
  toggle() {
    this.clicked = !Number(this.clicked);
  }
  _propertyShowChanged(oldValue, newValue) {
    console.log(oldValue, newValue);
  }
}

window.customElements.define('ox-button', OXButton);