// ==UserScript==
// @name Reload Images
// @match http*://*
// @run-at context-menu
// ==/UserScript==

for (let image of document.images) image.src = image.src;
