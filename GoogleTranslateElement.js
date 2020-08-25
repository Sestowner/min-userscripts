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
    google_translate_element.setAttribute('style', 'position: fixed; bottom: 0; right: 0; z-index: 99999');
    document.body.appendChild(google_translate_element);

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.getElementById(gtel_id).appendChild(script);
}
