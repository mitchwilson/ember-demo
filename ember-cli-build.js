'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/bootstrap/dist/css/bootstrap.css')
  return app.toTree();
};
