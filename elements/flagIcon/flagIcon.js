const _countryImgUrl = Symbol();
const _render = Symbol();

class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this[_countryImgUrl] = ''
  }

  static get observedAttributes() {
    return ['country'];
  }

  connectedCallback() {
    this[_render]();
    this.attachShadow({mode: 'open'}).innerHTML =`
      <style>
        img {
          width: 50px;
          height: 33px;
        }
      </style>
      <img src="${this[_countryImgUrl]}">
    `
  }

  get country() {
    return this.getAttribute('country');
  }

  set country(country) {
    this.setAttribute('country', country);
  }

  [_render]() {
    this[_countryImgUrl] = `../elements/flagIcon/${this.country}.jpg`
  }
}

customElements.define('flag-icon', FlagIcon);