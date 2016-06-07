'use strict';

require('./example');
require('./petfinderAPI');
require('./handlebars');
require('./petResults.handlebars');

const authEvents = require('./events.js');

$(document).ready(function() {
  authEvents.addHandlers();
});
