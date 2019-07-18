'user strict';
var sql = require('./db.js');

//Task object constructor
var Dealer = function(dealer){
    this.personname = dealer.personname;
    this.email = dealer.email;
    this.password=dealer.password;    
    this.created_at = new Date();
};

Dealer.getDealerById = function (dealerId, result) {
        sql.query("Select * from scrapkey_dealers where id = ? ", dealerId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};






Dealer.verifyDealer=function(email,password,result)
{
 sql.query("Select * from scrapkey_dealers where email = ? and password=? ", email,password, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Dealer.getAllDealers = function (result) {
        sql.query("Select * from scrapkey_dealers", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('dealers : ', res);  

                 result(null, res);
                }
            });   
};
// Task.updateById = function(id, task, result){
//   sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
//           if(err) {
//               console.log("error: ", err);
//                 result(null, err);
//              }
//            else{   
//              result(null, res);
//                 }
//             }); 
// };
// Task.remove = function(id, result){
//      sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

//                 if(err) {
//                     console.log("error: ", err);
//                     result(null, err);
//                 }
//                 else{
               
//                  result(null, res);
//                 }
//             }); 
// };

module.exports= Dealer;