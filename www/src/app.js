// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('prePost', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $log) {

  $rootScope.$on('$stateChangeStart', 
  function(event, toState, toParams, fromState, fromParams){ 
    $log.debug(toState);
    $log.debug(fromState);
  });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "src/templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('app.feed', {
      url: '/feed',
      views: {
        'tab-feed': {
          templateUrl: 'src/templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('app.selector', {
      url: '/selector',
      views: {
        'tab-selector': {
          templateUrl: 'src/templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('app.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'src/templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })

    .state('app.profile-detail', {
      url: '/profile/:profileId',
      views: {
        'tab-profile': {
          templateUrl: 'src/templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    // .state('tab.account', {
    //   url: '/account',
    //   views: {
    //     'tab-account': {
    //       templateUrl: 'src/templates/tab-account.html',
    //       controller: 'AccountCtrl'
    //     }
    //   }
    // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/feed');

});
