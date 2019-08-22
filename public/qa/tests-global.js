// Mocha tests
suite('Global Tests [public/vendor/qa/tests-global.js]', function(){
  
  test('page has a valid title', function(){
  assert(document.title &&  document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
  });

  test('The page has a header', function(){
    assert(document.getElementsByTagName("header").length == 1);
  });

  test('The page has just one header', function(){
    assert(document.getElementsByTagName("header").length <= 2);
  });
});
