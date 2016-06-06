'use strict';

require('./example');
const authEvents = require('./events.js');

$(document).ready(function() {
  authEvents.addHandlers();
});
