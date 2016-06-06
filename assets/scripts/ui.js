'use strict';

const app = require('./app-data.js');
const api = require('./api.js');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  success,
  //signInSuccess,
  //signOutSuccess,
  //updateSuccess,
  //indexSuccess,
  //createSuccess,
};
