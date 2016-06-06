'use strict';


const getPhotos = (getPhotosSuccess, getPhotosFailure, searchTerm) => {
  $.ajax({
    method: 'GET',
    url:'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=479994a81bb05629ca3986e2eb43abe6&tags=landscape,' + searchTerm  + '&per_page=1&sort=interestingness-desc&format=json&nojsoncallback=1',
  }).done(getPhotosSuccess)
    .fail(getPhotosFailure);
};

// Import module
var petfinder = require('petfinder')('api_key','api_secret');

// Get list of breeds
petfinder.getBreedList('cat', function(err, breeds) {
  console.log(breeds);
});

module.exports = true;
