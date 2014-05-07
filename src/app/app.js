angular.module( 'ngBoilerplate', [
  'templates-app',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data:{ pageTitle: 'Home' }
    })
    .state( 'about', {
      url: '/about',
      views: {
        "main": {
          controller: 'AboutCtrl',
          templateUrl: 'about/about.tpl.html'
        }
      },
      data:{ pageTitle: 'What is It?' }
    });
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;
