'use strict';

const app = require('./app-data.js');

const loadPets = (data) => {
  console.log("Loaded pets handlebars");
  console.log(data);
  let handlebarsTemplate = require('./petResults.hbs');
  let pets = data.petfinder.pets.pet;
  $('.petResultsTemplate').append(handlebarsTemplate({
    pets: pets
  }));
};

const loadFavorites = (data) => {
  console.log("Loaded favorites handlebars");
  console.log('data ', data);
  let favoritesTemplate = require('./favorites.hbs');
  $('.compiledFavorites').append(favoritesTemplate({
    favorites: data.favorites
}));
};

module.exports = {
  loadPets,
  loadFavorites,
};
