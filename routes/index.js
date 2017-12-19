var express = require('express');
var mongodb = require(__dirname +'/../database/mongodb.js');
var router = express.Router();

var StudentController = require(__dirname +'/../app/controllers/studentsController.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("this is root ");
  res.render('index', { title: 'Express' });
});

router.get('/students',StudentController.index);
router.get('/students/create',StudentController.create);
router.post('/students/create',StudentController.store);


router.get('/home', function(req, res, next) {
  // res.send("hiskki ");
  mongodb.connect().then(function(database){
    console.log(database.connection);
    var dbObj = database.connection ;
      var collection = dbObj.collection('students');
      collection.find().toArray(function(err, docs) {
          console.log("this is docs fata");
          console.log(docs);
          res.send(docs);
        })
  });
});

module.exports = router;
