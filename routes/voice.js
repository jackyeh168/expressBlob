var express = require('express');
var fs = require('fs');
const multer = require('multer')
const timeCode = new Date();
const filename = timeCode.getTime() + ".wav";
var storage = multer.diskStorage({
  destination: './public/voiceFiles',
  filename: function (req, file, cb) {
    //req.body is empty...
    console.log("file name from request." + req.filename);
    cb(null, timeCode.getTime() + '.wav');
  }
});
var upload = multer({
  storage: storage
})

var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('microphone');
});
/* GET users listing. */
router.get('/wav', function (req, res, next) {
  res.render('wav');
});

router.post('/upload', upload.single('data'), function (req, res, next) {
  var request = require("request");
    request.post('https://google.com/', function(err, response) {
      console.log(response.body);
      res.send(response).end();
    });
});


module.exports = router;