// ==UserScript==
// @name Google Translate Element
// @match http*://*
// @run-at document-end
// ==/UserScript==

const gtel_id = 'google_translate_element';

if (!document.getElementById(gtel_id)) {
	googleTranslateElementInit = () => {
		new google.translate.TranslateElement({
			pageLanguage: 'auto',
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		}, gtel_id);
	}

	const google_translate_element = document.createElement('div');
	google_translate_element.id = gtel_id;
	google_translate_element.setAttribute('style', 'position: fixed; bottom: 0; right: 0; z-index: 99999; cursor: move; width: max-content; height: max-content; padding-left: 0.5em; background: linear-gradient(45deg,#fff,#fff 50%,#000 50%,#000); background-size: 2px 2px;');
	google_translate_element.draggable = true;
	google_translate_element.ondrag = google_translate_element.ondragend = e => {
		e.preventDefault();
		e.stopPropagation();
		google_translate_element.style.top = `${e.y + (e.type === 'drag' ? google_translate_element.offsetTop : 0)}px`;
		google_translate_element.style.left = `${e.x + (e.type === 'drag' ? google_translate_element.offsetLeft : 0)}px`;
	};

	document.body.appendChild(google_translate_element);

	const script = document.createElement('script');
	script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
	document.getElementById(gtel_id).appendChild(script);
}
