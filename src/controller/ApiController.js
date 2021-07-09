
const facturaService = require('../service/facturaService');

const apiController = {

    getFactura: async (req, res) => {
        const factura = await facturaService.getFactura(req.params.id, req.params.ptoVta, req.params.tipoCbte);
        res.status(200).send(factura);
    },

    createFactura: async (req, res) => {
        const nuevaFactura = await facturaService.crearFactura(req);
        res.status(201).send(nuevaFactura);
        
    },

    serverStatus: async (req, res) => {
        const serverStatus = await facturaService.getServerStatus();
        res.status(200).send(serverStatus);
    },

    dateTransform: (req, res) => {
        const date = facturaService.getDate(req.body.date);
        res.status(200).send(date);
    },

    getTiposFactura: async (req, res) => {
        const tiposFactura = await facturaService.getVoucherTypes();
        res.status(200).send(tiposFactura);
    },

    getConceptTypes: async (req, res) => {
        const conceptTypes = await facturaService.getConceptTypes();
        res.status(200).send(conceptTypes);
    },

    getDocumentTypes: async (req, res) => {
        const documentTypes = await facturaService.getDocumentTypes();
        res.status(200).send(documentTypes);
    },

    getCurrenciesTypes: async (req, res) => {
        const currenciesTypes = await facturaService.getCurrenciesTypes();
        res.status(200).send(currenciesTypes);
    }
};

module.exports = apiController;