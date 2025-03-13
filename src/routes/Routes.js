
const express = require('express');
const router = express.Router();

const apiController = require('../controller/ApiController.js');

router.get('/factura/:ptoVta/:tipoCbte/:id', apiController.getFactura);
router.get('/serverStatus', apiController.serverStatus);
router.get('/tiposFactura', apiController.getTiposFactura);
router.get('/conceptTypes', apiController.getConceptTypes);
router.get('/documentTypes', apiController.getDocumentTypes);
router.get('/currencies', apiController.getCurrenciesTypes);
route.get('/health', apiController.getHealth);

router.post('/createVoucher', apiController.createFactura);
router.post('/dateTransform', apiController.dateTransform);

module.exports = router;