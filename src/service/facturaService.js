
import { Afip } from "afip.ts";


const afip = new Afip({
    key: "-----BEGIN RSA PRIVATE KEY-----\n" +
        "MIIEpAIBAAKCAQEA36P5Jn9ZngfE87tyrphb2kK5H897F2DSGuIpFaBOisaJKMKu\n" +
        "EGGFqwpuDtIwii4rKkug25vMOMO7Cq3n4ix9bYolgSIw6jGt1BeyC7rpflO9IyGi\n" +
        "9Zx1xNNO6ajVFVXJDHsVXdXo3ei/mTUBVUpUgtnpPVwRKoHSYQYb+6ZjzXrMPNdp\n" +
        "sHDNxVR6lR1DIcc5C5u2NccZqdil679fY6PwqyjriP96lrQlYhkKQvo7qK0ZyzAy\n" +
        "oGXCJmre1WejPm/wEp0LfvAY55QaPbKkbGQc2ujV5btPGMKLFnjp5WTJrIaJKMoW\n" +
        "VKd/gN8ZkV1rbP6tNisgxHqYEFcrXD2D6Zi5AwIDAQABAoIBAGoDlgks13O1ZSTR\n" +
        "GAUyDmDBvnYY6dXkPNUnnqg0zOa2RLDA0LjNMgspr5BxDTeDuUyce01/ZmkGR/VB\n" +
        "CSpLQs4ZbbvwVFXAZRGkhe9PlH4g/gjYWiKqH53FOaREN3acquiytCc+TtxbB/B9\n" +
        "kvs2eCdrW0iOC0kmL2908PDzKF5v092uWVijBQAVgIlRIjiDYVoiacrI6ryBFX4V\n" +
        "9Z3g6VzHRH9yPbDYK3urP0qG2fcwudBjq52gUZHg3IJyYpNI/Mz5ALlFFCnIoTBg\n" +
        "CrKGY9H/s7fUunkjHeU03rpTySBXRqV+1Y3f9tgPqzCKhHfgqnNp8AUFl75aIV39\n" +
        "VZCoLiECgYEA8yRsxWJFcx3YvawtM3S4EYsCxHsX9C+ABbsuXxYQtQpCLPSEdd5t\n" +
        "t3Gg/MImnRHWZh6lef9RDBWVbMazw0L8kXnQYf6FMjed0mV8Wt072x0xxGPAWqkW\n" +
        "2GDL4F8eV78HNDwAKk0BnvW6/nGE7gfw77gwwBHfNB9u0hbKBEzQp7ECgYEA63eK\n" +
        "US+epYICwfRWM/gQtnuloGmrGriNqPjw4yJEqxjVQ7yUbAkSbCkn6IoQEv2fNkGg\n" +
        "+mRqrALSYIDOaqbmqIEJQ3GepXeEm0bxVRDwx9LDwKIr2ZlLrJOFogJA+l5rJKnm\n" +
        "DcavjbIfGAQen1/R6+aLLh6MnhfNesRWSlsRTPMCgYEA4yb1g5ZiwcBxnAn+FKOH\n" +
        "z8PqKvvBDj1OQox0LxtjMm/KEUvDcIcEQ6yhtWIBRx7CCZe6CvbPlhWYCw68JMEx\n" +
        "Swvd9Z8eeyLgjA6KFi233OYyd4Kl001DbZVJA25534o1RcSEdwCIciSqtUoC4YqD\n" +
        "usF+sgJAX+a51wa5ZzkIepECgYEAxb3dBbME+x9Eq5dC8V/IwUbzX9R9ofIM3TM6\n" +
        "MLTtj/ZJ2xm6V0QDGZwybKHNP/WHyCuzQbQktRGllO926bACEs5SdjYrse++CBy6\n" +
        "vOJ+IoGIbPSD+Lg5CdPVrKlR4jB6sA6SKU2Kzmcgn62N/e+dPgudJHz5QCbjI89Q\n" +
        "XB9AVysCgYAwUrP2vhVHxtj5ZKb41eia23AnP/G3eoNP0AjPUN7qGQaYzshBUWXX\n" +
        "AE0HzpUp42a0HM9ap4JhhOCj9Nkc/A1xKCU6ScdfK6oWjJ+SpLxOzYzHiy8KWzJx\n" +
        "vZFFeVZ5qVYm0Oj0ajE5NCC6e0BAYa4tkUpq3wybA26c2EfnhDbZ6A==\n" +
        "-----END RSA PRIVATE KEY-----\n",
    cert: "----BEGIN CERTIFICATE-----\n" +
        "MIIDSjCCAjKgAwIBAgIIJZQk0E2gkoQwDQYJKoZIhvcNAQENBQAwMzEVMBMGA1UEAwwMQ29tcHV0\n" +
        "YWRvcmVzMQ0wCwYDVQQKDARBRklQMQswCQYDVQQGEwJBUjAeFw0yMzA4MjQwMTA0MjdaFw0yNDA5\n" +
        "MjYxMzU1MThaMDUxGDAWBgNVBAMMD2NlcnRBZmlwQXVzdGVyMjEZMBcGA1UEBRMQQ1VJVCAzMDcx\n" +
        "NTI3MDA3OTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAN+j+SZ/WZ4HxPO7cq6YW9pC\n" +
        "uR/Pexdg0hriKRWgTorGiSjCrhBhhasKbg7SMIouKypLoNubzDjDuwqt5+IsfW2KJYEiMOoxrdQX\n" +
        "sgu66X5TvSMhovWcdcTTTumo1RVVyQx7FV3V6N3ov5k1AVVKVILZ6T1cESqB0mEGG/umY816zDzX\n" +
        "abBwzcVUepUdQyHHOQubtjXHGanYpeu/X2Oj8Kso64j/epa0JWIZCkL6O6itGcswMqBlwiZq3tVn\n" +
        "oz5v8BKdC37wGOeUGj2ypGxkHNro1eW7TxjCixZ46eVkyayGiSjKFlSnf4DfGZFda2z+rTYrIMR6\n" +
        "mBBXK1w9g+mYuQMCAwEAAaNgMF4wDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBRbQFEw58MqtpxW\n" +
        "nJOF40KAsFDr9jAdBgNVHQ4EFgQUb7a0cEEWIUy9msFaj8gj9GPk6bowDgYDVR0PAQH/BAQDAgXg\n" +
        "MA0GCSqGSIb3DQEBDQUAA4IBAQAZYV7xLeCRcjhetI4itUSOpvgzIznQJGCIYXCuzC2nS/IP+S+a\n" +
        "yggnmXWJJ0EfbV6I7E4AuLaiC12Z6nPITrSqQq5htGM1Ywm5pVk/jDHU1h54AKYPb+C84T5KFb1g\n" +
        "qoc66EUTGxdvVZq1ZmnWUwq2Rzvxbg0tUU9j2XkdQsyAd533ozGCYj3qAL+5L8SfK4rcm0ez2910\n" +
        "l/SVAEcOVMwZqUatEVTISByx9xUT2MCRcl4YCA277CTzqCFZ8QerTdjs8+COZ+iFN9UxJcrDNirr\n" +
        "dLj1TXOLJpOryVW8MG3+8NCKtM2Z6QsWWq3FXMQCiek1ni1j5+vro6Vvu8MT7MMz\n" +
        "-----END CERTIFICATE-----\n",
    cuit: 30715270079,
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
export async function getServerStatus() {
    return await afip.electronicBillingService.getServerStatus();
}

