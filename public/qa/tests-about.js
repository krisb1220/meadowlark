suite("Tests for about page", ()=>{
  test("Page should contain a link to the contact page", ()=>{
    assert($('a[href="/contact"]').length);
  });
});