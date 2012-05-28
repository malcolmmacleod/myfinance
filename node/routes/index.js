
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'MyFinance' })
};

exports.home = function(req, res){
  res.render('home', { title: 'MyFinance' })
};