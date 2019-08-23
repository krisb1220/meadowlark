suite("Tests for about page", function(){
  test("Page should contain a link to the contact page", function(){
    assert($('a[href="/contact"]').length);
  });
});