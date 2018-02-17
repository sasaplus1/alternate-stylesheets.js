/* global chai, alternateStylesheets */

var assert = chai.assert;

describe('alternate-stylesheets', function() {

  before(function() {
    var fragment = document.createDocumentFragment();

    var names = ['blue', 'pink', 'snow'];

    var i, len, stylesheet;

    for (i = 0, len = names.length; i < len; ++i) {
      stylesheet = document.createElement('link');
      stylesheet.setAttribute(
        'href', ''
      );
      stylesheet.setAttribute(
        'rel', (i === 0) ? 'stylesheet' : 'alternate stylesheet'
      );
      stylesheet.setAttribute(
        'title', names[i]
      );

      fragment.appendChild(stylesheet);
    }

    document.head.appendChild(fragment);
  });

  describe('#get()', function() {
    it('get alternate stylesheets', function() {
      var stylesheets = alternateStylesheets.get();

      assert(stylesheets[0].title === 'blue');
      assert(stylesheets[1].title === 'pink');
      assert(stylesheets[2].title === 'snow');
    });
  });

  describe('#set()', function() {
    beforeEach(function() {
      alternateStylesheets.set('blue');
    });

    it('set alternate stylesheet', function() {
      assert(alternateStylesheets.set('blue') !== null);
      assert(!alternateStylesheets.get()[0].disabled);

      assert(alternateStylesheets.set('pink') !== null);
      assert(!alternateStylesheets.get()[1].disabled);

      assert(alternateStylesheets.set('snow') !== null);
      assert(!alternateStylesheets.get()[2].disabled);
    });

    it('return null if passed unknown stylesheet\'s title', function() {
      assert(alternateStylesheets.set('unknown') === null);
    });
  });

});
