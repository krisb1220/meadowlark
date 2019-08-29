/*jshint esversion: 6 */

module.exports.renderViewFromQueryString = function (req,res){
  let queries = {
    view: req.query.v, 
    contextFileName: req.query.c 
  };

    if(queries.contextFileName != undefined ) {
    contextObject = require('../handlebars-context/context-' + queries.contextFileName + '.js').context;
    res.render(queries.view,  contextObject);
  } else {
    res.render(queries.view);
  }
};