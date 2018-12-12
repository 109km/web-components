/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol. 
import './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader';
import './elements/ox-button/ox-button.js';
// import './elements/ox-bubble-wangfanglan/ox-bubble-wangfanglan.js';
// import './elements/ox-checkbox/ox-checkbox.js';
// import './elements/ox-input/ox-input.js';
// import './elements/ox-label/ox-label.js';
// import './elements/ox-modal-shaoxinheng/ox-modal-shaoxinheng.js';
// import './elements/ox-nav-mamingyang/ox-nav-mamingyang.js';
// import './elements/ox-radio/ox-radio.js';
// import './elements/ox-switch/ox-switch.js';
// import './elements/ox-tab/ox-tab.js';


// class App extends PolymerElement {
//   constructor() {
//     super();
//   }

//   ready() {
//     super.ready();
//   }

//   static get template() {
//     return html `
//       <style>
//         a{
//           color: var(--theme-link-color);
//           text-decoration: none;
//           font-weight: bold;
//         }
//       </style>
//       <div class="page page-demo">
//         <h2 class="page-title">
//           组件列表
//         </h2>
//         <p>
//           <a href="./elements/ox-button/ox-button.html">按钮 &lt;ox-button&gt;</a>
//         </p>
//         <p>
//           <a href="./elements/ox-radio/ox-radio.html">单选 &lt;ox-radio&gt;</a>
//         </p>
//         <p>
//           <a href="./elements/ox-checkbox/ox-checkbox.html">多选 &lt;ox-checkbox&gt;</a>
//         </p>
//       </div>
//     `;
//   }
// }

// // Register the element with the browser.
// customElements.define('root-app', App);