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
    if(data.id.length == 0 ){
      studentsModule.store(data).then(function(students_response){
        res.redirect('/students');
        // res.render('index',{response_obj : students_response});
      },function(error){
        res.render('error');
      });
    }else{
      studentsModule.update(data).then(function(students_response){
        res.redirect('/students');
        // res.render('index',{response_obj : students_response});
      },function(error){
        res.render('error');
      });
    }


  },
  'delete' : function(req, res){
    var data = req.params;
    console.log(data);
    studentsModule.delete(data).then(function(students_response){
      res.redirect('/students');
      // res.render('index',{response_obj : students_response});
    },function(error){
      res.render('error');
    });

  },
  'show' : function(req, res){
    var data = req.params;
    console.log(data);
    studentsModule.show(data).then(function(students_response){
      console.log("get response");
      console.log(students_response);
      res.render('create',{user_data : students_response});
      // res.render('index',{response_obj : students_response});
    },function(error){
      res.render('error');
    });

  }
}
