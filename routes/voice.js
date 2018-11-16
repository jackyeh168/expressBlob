var express = require('express');
const multer = require('multer')
const timeCode = new Date();
var storage = multer.diskStorage({
  destination: './public/voiceFiles',
  filename: function (req, file, cb) {
    //req.body is empty...
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
  request.post('https://httpbin.org/get', function(err, reponse) {
    //console.log(reponse.body);
    res.send(reponse).end();
  });
});


module.exports = router;