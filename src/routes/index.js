const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get("/CNPJ/:CNPJ", function (req, res) {
    let idEstabelecimento = req.params.idEstabelecimento
    var request = require('request');
    let retunJson ;
    var options = {
        'method': 'GET',
        'url': 'https://www.receitaws.com.br/v1/cnpj/'+ idEstabelecimento ,
        'headers': {
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        retunJson = response;
      });

    res.status(200).send({
        title: "Node Express API",
        json: retunJson
    });

});

module.exports = router;

