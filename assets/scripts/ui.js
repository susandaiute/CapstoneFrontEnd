'use strict';

const app = require('./app-data.js');
const api = require('./api.js');
const loadPets = require('./handlebars.js');
const petfinder = require('./petfinderApi');
const authUi = require('./ui');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('sign in success');
  petfinder.getPets(authUi.petSuccess, authUi.failure);
  petfinder.getFavorites(authUi.favoritesSuccess, authUi.failure);
};

const updateSuccess = function (){
  console.log('update worked');
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  console.log('sign out worked');
};

const petSuccess = (data) => {
  console.log(data);
  loadPets.loadPets(data);
};

const favoritesSuccess =(data) => {
  console.log('favorites success');
  console.log(data);
  loadPets.loadFavorites(data);
};

const deleteSuccess = () => {
  console.log(app);
  console.log('delete worked');
};

const favoriteUpdateSuccess = () => {
  console.log('fav update worked');
}


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  updateSuccess,
  petSuccess,
  deleteSuccess,
  favoritesSuccess,
  favoriteUpdateSuccess,
};
