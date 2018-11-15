module.exports = {
    name: 'tesseract-server',
    hostname: 'foo.com',
    port: 8500,
    protocol: 'http:',
    checkurl: 'https://foo.com/ocr',
      check: {
        checkurl: 'https://jordanbyrd.com/ocr',
        interval: '5s'
      }
}
