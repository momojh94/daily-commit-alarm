var express = require('express');
var router = express.Router();


router.get('/', (req, res) => res.json({test:'123'}));


module.exports = router;
