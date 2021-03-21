const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get("/CNPJ/:CNPJ", function (req, res) {
    var request = require('request');
    let retunJson ;
    var options = {
        'method': 'GET',
        'url': 'https://www.receitaws.com.br/v1/cnpj/45987005000198',
        'headers': {
            'Cookie': 'JSESSIONID=0e410cf8f1a222e61c620e689abdb9b5b3ce8428'
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        retunJson = response;
      });

    res.status(200).send({
        title: "Node Express API",
        json: "1" + retunJson
    });

});

module.exports = router;

