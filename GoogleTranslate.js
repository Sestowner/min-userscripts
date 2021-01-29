// ==UserScript==
// @name Google Translate
// @match http*://*
// @run-at context-menu
// ==/UserScript==

var selection = getSelection().toString();
var gt = `https://translate.google.com/%s${navigator.language.match(/^(zh-)?\w+/g)}`;

if (selection)
	window.open(`${gt.replace('%s', '#auto/')}/${selection}`, '_blank');
else
	window.open(`${gt.replace('%s', 'translate?sl=auto&tl=')}&u=${location.href}`, '_blank');
