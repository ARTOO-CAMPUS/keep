angular.module('artoo')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/memos');
  
    $stateProvider
      .state('memos', {
        url: '/memos',
        templateUrl: 'app/memos/memos.template.html',
        controller: 'MemosCtrl'
      });
  });