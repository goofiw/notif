// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('notif', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.constant('API_ENDPOINT', 'http://45.55.15.80:8080/api')
.config(function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/notify');
  $stateProvider
    .state('notify', {
      url: '/notify',
      templateUrl: 'js/templates/notify.html',
      controller: 'NotifyCtrl',
      controllerAs: 'notifyCtrl',
      // resolve: {
      //   return true;
      // }
    })
    .state('login', {
      url: '/login',
      templateUrl: '#',
      controller: 'UserCtrl',
      controllerAs: 'userCtrl'
    })
})
