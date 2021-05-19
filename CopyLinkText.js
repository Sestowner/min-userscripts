// ==UserScript==
// @name Copy Link Text
// @match *
// @run-at context-menu
// ==/UserScript==

if (document.activeElement.tagName === 'A'){
	let text = document.activeElement.text.trim();

	text && navigator.clipboard.writeText(text);
}

