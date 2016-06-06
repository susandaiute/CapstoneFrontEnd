'use strict';

const app = require('./app-data.js');
const api = require('./api.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const updateSuccess = function (){
  console.log('update worked');
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  console.log('sign out worked');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  updateSuccess,
  //indexSuccess,
};
