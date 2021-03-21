var router = require('express').Router(),
  express = require("express"),
  bodyParser = require('body-parser'),
  conSql = require('../../controllers/dbConnections'),
  db = require('../../controllers/dbConnections'),
  mysql = require('mysql'),
  auth = require('basic-auth');
// rotas a serem chamadas a partir de /abaco. 
// para melhor direcionar o desenvolvimento as informações de operação deverão ficar aqui 
var querySql = db.querySql;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/CNPJ/:CNPJ", function (req, res) {
  let idEstabelecimento = req.params.idEstabelecimento
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://www.receitaws.com.br/v1/cnpj/'+ idEstabelecimento ,
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  
});

module.exports = router;