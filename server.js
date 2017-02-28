const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer();

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({size: req.file.size});
});

app.listen(process.env.PORT);
console.log('App listening on port ' + process.env.PORT);
