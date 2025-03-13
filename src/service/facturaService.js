
const Afip = require('@afipsdk/afip.js');
const afip = new Afip({
    CUIT: 30715270079,
    //access_token: 'Tu3Rq85oMBk3ZQ2IfabD64GMF4dAAsqH8zQGbXuDbnXkjFyeI3aAz1ImU4NgLO59',
    production: true,
    ta_folder: './src/certs',
    res_folder: './src/certs',
    cert: 'cert',
    key: 'key',

});


//Crear siguiente factura
async function crearFactura(req) {
    const voucher = await afip.ElectronicBilling.createNextVoucher(req.body);
    return voucher;
}

//Obtener información de una factura
async function getFactura(id, ptoVta, tipoCbte) {
    const voucher = await afip.ElectronicBilling.getVoucherInfo(id, ptoVta, tipoCbte)
    return voucher;
}

//Obtener puntos de venta disponibles
async function getSalesPoints() {
    const salesPoints = await afip.ElectronicBilling.getSalesPoints();
    return salesPoints;
}

//Obtener tipos de comprobantes disponibles
async function getVoucherTypes() {
    const voucherTypes = await afip.ElectronicBilling.getVoucherTypes();
    return voucherTypes;
}

//Obtener tipos de conceptos disponibles
async function getConceptTypes() {
    const conceptTypes = await afip.ElectronicBilling.getConceptTypes();
    return conceptTypes;
}

//Obtener tipos de documentos disponibles
async function getDocumentTypes() {
    const documentTypes = await afip.ElectronicBilling.getDocumentTypes();
    return documentTypes;
}

//Obtener tipos de alícuotas disponibles
async function getAliquotTypes() {
    const aliquotTypes = await afip.ElectronicBilling.getAliquotTypes();
    return aliquotTypes;
}

//Obtener tipos de monedas disponibles
async function getCurrenciesTypes() {
    const currenciesTypes = await afip.ElectronicBilling.getCurrenciesTypes();
    return currenciesTypes;
}

//Obtener tipos de opciones disponibles para el comprobante
async function getOptionsTypes() {
    const optionTypes = await afip.ElectronicBilling.getOptionsTypes();
    return optionTypes;
}

//Obtener tipos de tributos disponibles
async function getTaxTypes() {
    const taxTypes = await afip.ElectronicBilling.getTaxTypes();
    return taxTypes;
}

//Transformar formato de fecha que utiliza AFIP (yyyymmdd) a yyyy-mm-dd -método formatDate pasándole la fecha como parámetro
function getDate(date) {
    const dateFormatted = afip.ElectronicBilling.formatDate(date);
    return dateFormatted;
}

//Obtener estado del servidor
async function getServerStatus() {
    const serverStatus = await afip.ElectronicBilling.getServerStatus();
    return serverStatus;
}

module.exports = { crearFactura, getFactura, getSalesPoints, getConceptTypes, getVoucherTypes, getDocumentTypes, getAliquotTypes, getServerStatus, getDate, getTaxTypes, getOptionsTypes, getCurrenciesTypes };
