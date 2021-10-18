// ==UserScript==
// @name Toggle Design Mode
// @match *
// @run-at context-menu
// ==/UserScript==

document.designMode = document.designMode === 'off' ? 'on' : 'off';

