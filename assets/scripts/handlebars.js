'use strict';

const app = require('./app-data.js');

const loadPets = () => {
  console.log("Loaded dat bucket");
  let handlebarsTemplate = require('./petResults.handlebars');
  let locations = app.user.locations;
  console.log(locations);
  $('#location-list').children().remove();
  $('#location-list').append(handlebarsTemplate({
    locations: locations
  }));
};

module.exports = {
  loadPets
};
