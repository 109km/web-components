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
import './elements/ox-bubble';
import './elements/ox-bubble-main';
import './elements/ox-bubble-alert';

import './elements/ox-checkbox';

import './elements/ox-input';

import './elements/ox-modal';
import './elements/ox-menu-item';
import './elements/ox-menu-item-groups';
import './elements/ox-menu-item-title';
import './elements/ox-menu-groups-item';

import './elements/ox-pagination';

import './elements/ox-radio';

import './elements/ox-switch';

import './elements/ox-tabs';
import './elements/ox-tab-card';
import './elements/ox-tab-pane';
import './elements/ox-tag';

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[ox-ready]') && document.querySelector('[ox-ready]').removeAttribute('ox-ready');
}, false);