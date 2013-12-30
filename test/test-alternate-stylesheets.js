describe('stylesheets', function() {

  describe('#get()', function() {

    beforeEach(function() {
      window.mock = {
        styleSheets: [
          {disabled: false, title: 'cafe'},
          {disabled: true, title: 'chocolate'},
          {disabled: true, title: 'orange'}
        ]
      };
    });

    afterEach(function() {
      delete window.mock;
    });

    it('should returned alternate stylesheets from styleSheets', function() {
      expect(alternateStyleSheets.get()).to.eql([
        {disabled: false, title: 'cafe'},
        {disabled: true, title: 'chocolate'},
        {disabled: true, title: 'orange'}
      ]);
    });

  });

  describe('#get() with legacy browser', function() {

    beforeEach(function() {
      sinon.stub(document, 'getElementsByTagName', function(name) {
        return [
          {rel: 'alternate'},
          {disabled: false, rel: 'stylesheet', title: 'cafe'},
          {rel: 'author'},
          {disabled: true, rel: 'alternate StyleSheet', title: 'chocolate'},
          {disabled: true, rel: 'alternate stylesheet', title: 'orange'},
          {rel: 'icon'},
          {rel: 'shortcut icon'}
        ];
      });
    });

    afterEach(function() {
      document.getElementsByTagName.restore();
    });

    it('should returned alternate stylesheets from link tags', function() {
      expect(alternateStyleSheets.get()).to.eql([
        {disabled: false, rel: 'stylesheet', title: 'cafe'},
        {disabled: true, rel: 'alternate StyleSheet', title: 'chocolate'},
        {disabled: true, rel: 'alternate stylesheet', title: 'orange'}
      ]);
    });

  });

  describe('#set()', function() {

    beforeEach(function() {
      window.mock = {
        styleSheets: [
          {disabled: false, title: 'cafe'},
          {disabled: true, title: 'chocolate'},
          {disabled: true, title: 'chocolate'},
          {disabled: true, title: 'orange'},
          {disabled: true, title: 'orange'}
        ]
      };
    });

    afterEach(function() {
      delete window.mock;
    });

    it('should set enable with stylesheets for matching title', function() {
      alternateStyleSheets.set('chocolate')
      expect(window.mock.styleSheets).to.eql([
        {disabled: true, title: 'cafe'},
        {disabled: false, title: 'chocolate'},
        {disabled: false, title: 'chocolate'},
        {disabled: true, title: 'orange'},
        {disabled: true, title: 'orange'}
      ]);

      alternateStyleSheets.set('orange')
      expect(window.mock.styleSheets).to.eql([
        {disabled: true, title: 'cafe'},
        {disabled: true, title: 'chocolate'},
        {disabled: true, title: 'chocolate'},
        {disabled: false, title: 'orange'},
        {disabled: false, title: 'orange'}
      ]);
    });

  });

});
