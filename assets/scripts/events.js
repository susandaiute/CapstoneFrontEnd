'use strict';


const getFormFields = require('../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');
const petfinder = require('./petfinderApi');
const app = require('./app-data.js');
//const petData = require('./petResults.hbs');


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
  });
  $('#sign-out').on('click', function(event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#updatePassword').on('submit', function(event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.updatePassword(authUi.updateSuccess, authUi.failure, data);
  });
  $('#getPetsButton').on('click', function(event) {
    event.preventDefault();
    petfinder.getPets(authUi.petSuccess, authUi.failure);
  });

  $('.petResultsTemplate').on('click', '#addPetButton', function() {
    console.log('add pet button clicked');
    console.log($(this).data("name"));
    console.log($(this).data("description"));
    //console.log(data);
    // let petData = data.petfinder.pets.pet;
    // let petName = petData.name;
    // let petDescription = petData.description;
    // let userID = app.user.id;
    // petfinder.addFavorite(authUi.success, authUi.failure, userID, petName, petDescription, data);
  });

};



module.exports = {
  addHandlers
};
