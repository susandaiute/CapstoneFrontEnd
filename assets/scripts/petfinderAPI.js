'use strict';

const app = require('./app-data');

const getPets = (petSuccess, failure, KEY) => {
  $.ajax({
      method: 'GET',
      url: app.api + '/pets',
    }).done(petSuccess)
    .fail(failure);
};

const addFavorite = (success, failure, petName, petDescription, userID) => {
  console.log('add favorite request queued');
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

const addPet = () => {
  console.log('add pet ran');
}



module.exports = {
  getPets,
  addFavorite,
};
