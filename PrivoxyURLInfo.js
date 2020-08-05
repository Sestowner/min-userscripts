// ==UserScript==
// @name Privoxy URL Info
// @match http*://*
// @run-at context-menu
// ==/UserScript==

window.open(`http://config.privoxy.org/show-url-info?url=${location.href}`, '_blank');
