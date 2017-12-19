var mongodb = require(__dirname +'/../../database/mongodb.js');
var Q = require('q');

module.exports = {
  'index' : function(){
    var defer = Q.defer();
    mongodb.connect().then(function(database){
      console.log(database.connection);
      var dbObj = database.connection ;
        var collection = dbObj.collection('students');
        collection.find().toArray(function(err, docs) {
            console.log("this is docs fata");
            console.log(docs);
            defer.resolve(docs);
            // res.send(docs);
          })
    });
    return defer.promise;
  }
}
