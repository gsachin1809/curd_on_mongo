var dbM = require('mongodb').MongoClient;
var Q = require('q');

module.exports = {

  'connect' : function(){
    var defer = Q.defer();
    console.log("connect..123");
    console.log(dbM);
    dbM.connect('mongodb://localhost:27017/test', function (err, db) {
      console.log("iiiiiii");
      console.log(db);
      defer.resolve({'connection':db});

      // if (err) throw err
      // console.log("connect with mongoDB");
      // var collection = db.collection('students')
      //
      // collection.find().toArray(function(err, docs) {
      //   console.log("this is docs fata");
      //   console.log(docs)
      //   db.close()
      //   defer.resolve({'connection':db});
      // });

      // db.students.find().toArray(function (err, result) {
      //   if (err) throw err
      //
      //   console.log(result);
      // })
    });

    return defer.promise ;

    }

}
