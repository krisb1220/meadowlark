var fortune = require("../lib/tools/fortune.js");
var expect  = require("chai").expect;

suite("Fortune cookie unit tests", function(){

  test("getFortune() returns a fortune?", function(){
    expect(typeof fortune.getFortune === 'string');
  });
});