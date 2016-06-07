'use strict';

const app = require('./app-data');

const getPets = (petSuccess, failure, KEY) => {
  $.ajax({
      method: 'GET',
      url: app.api + '/pets',
    }).done(petSuccess)
    .fail(failure);
};



module.exports = {
  getPets,
};
