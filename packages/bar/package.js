Package.describe({
  name: 'bar',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('bar.js');
/* make any change in here and save it

hi there

*/
  api.export('Bar');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.20.3');
  api.use('bar');
  api.addFiles('bar-tests.js');
});
