var app= angular.module('nameApp', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');       
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'partials/form.html',
        controller: 'registerCtrl'
      })
  }])
  app.controller('PanelController', function(){   //controller for the panel 
    this.tab =1;

    this.selectTab= function(setTab) { 
      this.tab =setTab;
    };

    this.isSelected=function(checkTab){
      return this.tab===checkTab;
    };
  });