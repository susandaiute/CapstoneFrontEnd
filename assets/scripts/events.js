'use strict';


const getFormFields = require('../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');
const petfinder = require('./petfinderApi');
const app = require('./app-data');

const addHandlers = () => {
  $('#signUpForm').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#signInForm').on('submit', function(event) {
    event.preventDefault();
    console.log('sign in event hit');
    let data = getFormFields(this);
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    $('.modal.in').modal('hide');
  });
  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#updatePassword').on('submit', function(event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.updatePassword(authUi.updateSuccess, authUi.failure, data);
    $('.modal.in').modal('hide');
  });
  $('#getPetsButton').on('click', function(event) {
    event.preventDefault();
    petfinder.getPets(authUi.petSuccess, authUi.failure);
    petfinder.getFavorites(authUi.favoritesSuccess, authUi.failure);
  });
  $('.petResultsTemplate').on('click', '#addPetButton', function() {
    console.log('add pet button clicked');
    let petName = $(this).data("name");
    let petDescription = $(this).data("description");
    let userID = app.user.id;
    petfinder.addFavorite(petName, userID, petDescription, authUi.success, authUi.failure);
  });
  $('.compiledFavorites').on('click', '#deletePetButton', function() {
    console.log('delete pet button clicked');
    let petID = $(this).data('id');
    petfinder.deleteFavorite(petID, authUi.deleteSuccess, authUi.failure);
  });


};



module.exports = {
  addHandlers
};
