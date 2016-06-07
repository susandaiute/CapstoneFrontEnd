'use strict';

require('./example');
require('./petfinderAPI');
require('./handlebars');
require('./petResults.hbs');

const authEvents = require('./events.js');

$(document).ready(function() {
  authEvents.addHandlers();
});
