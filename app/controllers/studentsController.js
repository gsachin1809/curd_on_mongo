var studentsModule = require(__dirname +'/../Modules/studentModules.js')

module.exports = {
  'index' : function(req, res){
    studentsModule.index().then(function(students_response){
      res.render('index',{response_obj : students_response});
    },function(error){
      res.render('error');
    });
  },
  'create': function(req, res){
    res.render('create');
  },
  'store' : function(req, res){
    var data = req.body;
    console.log(data);
    studentsModule.store(data).then(function(students_response){
      res.redirect('/students');
      // res.render('index',{response_obj : students_response});
    },function(error){
      res.render('error');
    });

  }
}
