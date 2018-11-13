const tesseract = require('node-tesseract');
const express = require('express');
const app = express();
const http = require('http');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });

const server = http.createServer(app);

app.post('/', upload.single('img'), (req, res) => {
  console.log(req.file);
  tesseract.process(req.file.filename, (err, text) => {
    if(err) {
      console.error(err);
    } else {
      console.log(text);
    }
    console.log('text:', text);
    res.send(text);
  });
});

server.listen(8080, '0.0.0.0', () => console.log('started server'));

// drain any proc errors to stdout
process.on('uncaughtException', function(err) {
  // todo: logut store state and info about locks, etc
  console.log('uncaught exception', err);
});
