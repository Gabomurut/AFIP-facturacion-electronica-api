
const AfipSDK = require('@afipsdk/afip.js');

const afip = new AfipSDK({
    CUIT: 30715270079,
    production: true,
    cert: 'cert',
    key: 'key',
    res_folder: __dirname + '/../certs/',
    ta_folder: '/tmp/',
});

async function crearFactura(req) {
    const voucher = await afip.ElectronicBilling.createNextVoucher(req.body);
    return voucher;
}

async function getFactura(id, ptoVta, tipoCbte) {
    return await afip.ElectronicBilling.getVoucherInfo(id, ptoVta, tipoCbte);
}

async function getVoucherTypes() {
    return await afip.ElectronicBilling.getVoucherTypes();
}

async function getConceptTypes() {
    return await afip.ElectronicBilling.getConceptTypes();
}

async function getDocumentTypes() {
    return await afip.ElectronicBilling.getDocumentTypes();
}

async function getCurrenciesTypes() {
    return await afip.ElectronicBilling.getCurrenciesTypes();
}

async function getServerStatus() {
    return await afip.ElectronicBilling.getServerStatus();
}

function getDate(date) {
    return afip.ElectronicBilling.formatDate(date);
}

module.exports = {
    crearFactura,
    getFactura,
    getVoucherTypes,
    getConceptTypes,
    getDocumentTypes,
    getCurrenciesTypes,
    getServerStatus,
    getDate,
};