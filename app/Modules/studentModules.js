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
  },

  'store' : function(data){
    var defer = Q.defer();
    console.log("store function");
    console.log(data);
    console.log("pass 29");
    console.log(data.last_name);
    console.log("this is 31");
    var myobj_01 = {};
    var address = {city:data.city, state:data.state}
    var myobj = {first_name:data.first_name, last_name:data.last_name, address:address};

    mongodb.connect().then(function(database){
      console.log("connected with mongodb");
      // console.log(database.connection);
      var dbObj = database.connection ;
      console.log("pass 29");

      dbObj.collection("students").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        defer.resolve(res);
      });

    });
    return defer.promise;
  }
}
