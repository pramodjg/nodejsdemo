'use strict';
module.exports = function(app) {
  var dealersData = require('../controller/apicontroller');

  // todoList Routes
  app.route('/dealers')
    .get(dealersData.list_all_dealers)
   ;
   
   app.route('/dealers/:dealerId')
    .get(dealersData.read_a_dealer);

    app.route('/verifyLogin')
    .post(dealersData.verifylogin);

    // .put(dealersData.update_a_task)
    // .delete(dealersData.delete_a_task);
    };