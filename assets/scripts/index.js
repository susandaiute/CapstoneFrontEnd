'use strict';

require('./example');
require('./petfinderAPI');

const authEvents = require('./events.js');

$(document).ready(function() {
  authEvents.addHandlers();
});
