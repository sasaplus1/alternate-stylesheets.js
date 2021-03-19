import assert = require('assert');

import { getAlternateStylesheets, setAlternateStylesheet } from '../index';

describe('alternate-stylesheets', function () {
  before(function () {
    const fragment = document.createDocumentFragment();
    const names = ['blue', 'pink', 'snow'];

    let stylesheet: HTMLLinkElement;

    for (let i = 0, len = names.length; i < len; ++i) {
      stylesheet = document.createElement('link');
      stylesheet.setAttribute('href', '');
      stylesheet.setAttribute(
        'rel',
        i === 0 ? 'stylesheet' : 'alternate stylesheet'
      );
      stylesheet.setAttribute('title', names[i]);

      fragment.appendChild(stylesheet);
    }

    document.head.appendChild(fragment);
  });

  describe('#getAlternateStylesheets()', function () {
    it('get alternate stylesheets', function () {
      const stylesheets = getAlternateStylesheets();

      assert(stylesheets[0].title === 'blue');
      assert(stylesheets[1].title === 'pink');
      assert(stylesheets[2].title === 'snow');
    });
  });

  describe('#setAlternateStylesheet()', function () {
    beforeEach(function () {
      setAlternateStylesheet('blue');
    });

    it('set alternate stylesheet', function () {
      assert(setAlternateStylesheet('blue'));
      assert(!getAlternateStylesheets()[0].disabled);

      assert(setAlternateStylesheet('pink'));
      assert(!getAlternateStylesheets()[1].disabled);

      assert(setAlternateStylesheet('snow'));
      assert(!getAlternateStylesheets()[2].disabled);
    });

    it("return false if passed unknown stylesheet's title", function () {
      assert(!setAlternateStylesheet('unknown'));
    });
  });
});
