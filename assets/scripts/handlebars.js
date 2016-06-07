'use strict';

const app = require('./app-data.js');

const loadPets = (data) => {
  console.log("Loaded pets handlebars");
  let handlebarsTemplate = require('./petResults.hbs');
  let pets = data.petfinder.pets.pet;
  $('.petResultsTemplate').append(handlebarsTemplate({
    pets: pets
  }));
};

module.exports = {
  loadPets
};
