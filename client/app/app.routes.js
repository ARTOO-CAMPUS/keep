angular.module('artoo')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
  
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.template.html'
      })
      
      .state('memos', {
        url: '/memos',
        templateUrl: 'app/memos/memos.template.html',
        controller: 'MemosCtrl'
      });
  });