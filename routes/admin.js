const express = require('express');
const router = express.Router();

const controllerAdmin = require('../controller/adminController');

router.get('/', controllerAdmin.paginaInicial);


module.exports = router;