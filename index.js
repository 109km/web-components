/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader';
import './elements/ox-button';
// wyd
import './elements/ox-pagination';
//llj
// import './elements/ox-tab-llj/ox-tabs.js';
// import './elements/ox-tab-llj/ox-tab-pane.js';
// import './elements/ox-tab-llj/ox-tab-card.js';





// import './elements/ox-bubble-wangfanglan/ox-bubble-wangfanglan.js';
import './elements/ox-bubble';
import './elements/ox-bubble-main';
import './elements/ox-bubble-alert';


//wd
import './elements/ox-radio';
import './elements/ox-switch';


import './elements/ox-checkbox';
import './elements/ox-modal-shaoxinheng';

import './elements/ox-input';


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[ox-ready]') && document.querySelector('[ox-ready]').removeAttribute('ox-ready');
}, false);