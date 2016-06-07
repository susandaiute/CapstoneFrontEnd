'use strict';

const app = require('./app-data');

const getPets = (success, failure, KEY) => {
  $.ajax({
    method: 'GET',
    url: app.api + '/pets',
  }).done(success)
    .fail(failure);
};



module.exports = {
  getPets,
};
