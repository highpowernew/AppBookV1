const express = require('express');
const router = express.Router();


const controllerAll = require('../controller/allController');

router.get('/', controllerAll.paginaInicial);

module.exports = router;