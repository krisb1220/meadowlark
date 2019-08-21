// Mocha tests
suite('Global Tests (public/vendor/qa/tests-global.js)', function(){
  test('page has a valid title', function(){
  assert(document.title && document.title.match(/\S/) &&
  document.title.toUpperCase() !== 'TODO');
  });
 });


 suite ('Global tests ran:', )
