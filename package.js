Package.describe({
  name: 'kadira:meteor-page-js-ie-support',
  summary: 'IE supported version of page.js',
  version: '1.0.0',
  git: 'https://github.com/kadirahq/meteor-page-js-ie-support.git'
});

Package.onUse(function(api) {
  configure(api);
});

function configure(api) {
  api.versionsFrom('1.0');
  api.add_files('page.js/index.js', 'client');
}