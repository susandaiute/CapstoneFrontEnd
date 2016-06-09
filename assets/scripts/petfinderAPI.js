'use strict';

const app = require('./app-data');

const getPets = (petSuccess, failure, KEY) => {
  $.ajax({
      method: 'GET',
      url: app.api + '/pets',
    }).done(petSuccess)
    .fail(failure);
};

const addFavorite = (petName, userID, petDescription, success, failure) => {
  console.log('add favorite request queued');
  console.log(petName);
  console.log(userID);
  console.log(petDescription);
  $.ajax({
  method: 'POST',
  url: app.api + '/favorites',
  data: {
    favorite: {
      name: petName,
      description: petDescription,
      user_id: userID,
    }
  },
  headers: {
  "Content-Type": "application/json",
},
  headers: {
  Authorization: 'Token token=' + app.user.token,
},
}).done(success)
  .fail(failure);
};


module.exports = {
  getPets,
  addFavorite,
};
