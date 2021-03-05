var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.render('teste', { title: 'teste 1', numero: 10});
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;