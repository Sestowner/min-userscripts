// ==UserScript==
// @name AutoRetry
// @match http*://*
// @run-at document-end
// ==/UserScript==

window.ec && setTimeout(() => retry(), 10000);
