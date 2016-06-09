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
  $.ajax({
  method: 'POST',
  url: app.api + '/favorites',
  data: {
    favorite: {
      name: petName,
      description: petDescription,
      user_id: userID,
      application: false,
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

const deleteFavorite = (petID, deleteSuccess, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/favorites/' + petID,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(deleteSuccess)
  .fail(failure);
};

const getFavorites = (favoritesSuccess, failure) => {
  $.ajax({
      method: 'GET',
      url: app.api + '/favorites',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    }).done(favoritesSuccess)
    .fail(failure);
};

const applyFavorite = (petID, updateFavoriteSuccess, failure) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/favorites/' + petID,
    data: {
      favorite: {
        application: true,
      }
    },
    headers: {
    "Content-Type": "application/json",
  },
    headers: {
    Authorization: 'Token token=' + app.user.token,
  },
}).done(updateFavoriteSuccess)
    .fail(failure);
  };


module.exports = {
  getPets,
  addFavorite,
  deleteFavorite,
  getFavorites,
  applyFavorite,
};
