(function(){

  'use strict';

  function onDOMContentLoaded() {
    var fragment = document.createDocumentFragment();

    var stylesheets = alternateStylesheets.getAlternateStylesheets();
    var i, len, element, stylesheet;

    for (i = 0, len = stylesheets.length; i < len; ++i) {
      stylesheet = stylesheets[i];

      element = document.createElement('option');
      element.value = stylesheet.title;
      element.innerHTML = stylesheet.title;

      fragment.appendChild(element);
    }

    var select = document.getElementById('js-select');

    function onChange(event) {
      alternateStylesheets.setAlternateStylesheet(event.target.value);
    }

    select.appendChild(fragment);
    select.addEventListener('change', onChange, false);
  }

  document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);

}());
