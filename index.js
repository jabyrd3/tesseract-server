const tesseract = require('node-tesseract');
const express = require('express');
const app = express();
const http = require('http');
var multer  = require('multer')

const server = http.createServer(app);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
});

var upload = multer({storage});

app.post('/', upload.single('img'), (req, res) => {
  tesseract.process(`/scripts/uploads/${req.file.filename}`, {
    psm: 1,
    l: 'eng'
  }, function(err, text){
    if(err) {
      console.error(err);
    } else {
      console.log(text);
    }
    res.send(text);
  });
});

server.listen(8080, '0.0.0.0', () => console.log('started server'));

// drain any proc errors to stdout
process.on('uncaughtException', function(err) {
  // todo: logut store state and info about locks, etc
  console.log('uncaught exception', err);
});
