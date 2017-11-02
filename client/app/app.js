angular.module('artoo', [
  'ngResource',
  'ngMaterial',
  'ui.router'
])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('deep-orange')
      .warnPalette('red')
      .backgroundPalette('grey');
  })

  .run(function ($rootScope, $state) {
    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
      if (error.status === 404 && error.data === 'Item not found') { $state.go('items.list'); }
    });
  });