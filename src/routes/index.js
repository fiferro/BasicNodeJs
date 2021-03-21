const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get("/CNPJ/:CNPJ", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    let idEstabelecimento = req.params.CNPJ
    var request = require('request');
    let retunJson;
    var options = {
        'method': 'GET',
        'url': 'https://www.receitaws.com.br/v1/cnpj/' + idEstabelecimento,
        'headers': {
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.status(200).send({
            response
        });
    });
});

module.exports = router;

