'use strict';

var Dealer = require('../model/apimodel.js');

exports.list_all_dealers = function(req, res) {
  Dealer.getAllDealers(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};


exports.verifylogin = function(req,res){
  var email= req.params.email;
  var password = req.params.password;
  Dealer.verifyDealer(email, function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
};




exports.read_a_dealer = function(req, res) {
  Dealer.getDealerById(req.params.dealerId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


