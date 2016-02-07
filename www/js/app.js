// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'uiGmapgoogle-maps', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function($state) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

    /*    if (localStorage.getItem('loggedUser')) {
            $state.go('app.profile');
        } else {
            $state.go('login');
        }*/
    });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, uiGmapGoogleMapApiProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);
    uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
    v: '3.17',
    libraries: 'weather,geometry,visualization',
    language: 'en',
    sensor: 'false',
  })

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/authentication/login.html',
        controller: 'LoginCtrl' 
    })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/authentication/signup.html',       
        controller: 'SignupCtrl' 
    })

     .state('forgot', {
        url: '/forgot',
        templateUrl: 'templates/authentication/forget.html',
        controller: 'ForgotCtrl'    

    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.mediumdetail', {
url: '/mediumdetail',
views: {
'menuContent': {
templateUrl: 'templates/mediumdetail.html',
controller: 'HighCtrl'
}

}
})

    .state('app.medium', {
url: '/medium',
views: {
'menuContent': {
templateUrl: 'templates/medium.html',
controller: 'MediumCtrl'
}

}
})

 .state('app.notify', {
        url: '/notify',
        views: {
            'menuContent': {
                templateUrl: 'templates/notify.html',
                //controller: 'ActivityCtrl'
            }
            
        }
    })

 .state('app.privacy', {
        url: '/privacy',
        views: {
            'menuContent': {
                templateUrl: 'templates/privacy.html',
                controller: 'ProfileDataCtrl'
            }
            
        }
    })
 .state('app.trip', {
        url: '/trip',
        views: {
            'menuContent': {
                templateUrl: 'templates/trip.html',
                controller: 'BookingCtrl'
            }
            
        }
    })

  .state('app.faq', {
        url: '/faq',
        views: {
            'menuContent': {
                templateUrl: 'templates/faq.html',
                controller: 'faqCtrl'
            }
            
        }
    })

    .state('app.success', {
        url: '/success',
        views: {
            'menuContent': {
                templateUrl: 'templates/success.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.chat', {
        url: '/chat',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.aware', {
        url: '/aware',
        views: {
            'menuContent': {
                templateUrl: 'templates/aware.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.sense', {
        url: '/sense',
        views: {
            'menuContent': {
                templateUrl: 'templates/sense.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.self', {
        url: '/self',
        views: {
            'menuContent': {
                templateUrl: 'templates/self.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.escape', {
        url: '/escape',
        views: {
            'menuContent': {
                templateUrl: 'templates/escape.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

    .state('app.peper', {
        url: '/peper',
        views: {
            'menuContent': {
                templateUrl: 'templates/peper.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })

     .state('app.fight', {
        url: '/fight',
        views: {
            'menuContent': {
                templateUrl: 'templates/fight.html',
                controller: 'ActivityCtrl'
            }
            
        }
    })
      

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            }
        }
    })

    .state('app.service', {
        url: '/service',
        views: {
            'menuContent': {
                templateUrl: 'templates/service.html',
                controller: 'ActivityCtrl'
            
            }
        }
    })



    .state('app.invite', {
        url: '/invite',
        views: {
            'menuContent': {
                templateUrl: 'templates/invite.html',
                controller: 'ActivityCtrl'
            
            }
        }
    })

     .state('app.setting', {
        url: '/setting',
        views: {
            'menuContent': {
                templateUrl: 'templates/setting.html',
                controller: 'ActivityCtrl'
            
            }
        }
    })

     .state('app.change', {
        url: '/change',
        views: {
            'menuContent': {
                templateUrl: 'templates/change.html',
                controller: 'ActivityCtrl'
            
            }
        }
    })

     .state('app.help', {
        url: '/help',
        views: {
            'menuContent': {
                templateUrl: 'templates/help.html',
                controller: 'ActivityCtrl'
            
            }
        }
    })


    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            }
        }
    })


     .state('app.durgas', {
        url: '/durgas',
        views: {
            'menuContent': {
                templateUrl: 'templates/durgas.html',
                controller: 'ProfileCtrl'
            }
        }
    })

     .state('app.tips', {
        url: '/tips',
        views: {
            'menuContent': {
                templateUrl: 'templates/tips.html',
               controller: 'GalleryCtrl'
            }
        }
    })

     .state('app.good', {
        url: '/good',
        views: {
            'menuContent': {
                templateUrl: 'templates/good.html',
                controller: 'GalleryCtrl'
            }
        }
    })


     .state('app.bad', {
        url: '/bad',
        views: {
            'menuContent': {
                templateUrl: 'templates/bad.html',
                controller: 'GalleryCtrl'
            }
        }
    })


          .state('app.hike', {
        url: '/hike',
        views: {
            'menuContent': {
                templateUrl: 'templates/hike.html',
                controller: 'GalleryCtrl'
            }
        }
    })

     .state('app.nb', {
        url: '/nb',
        views: {
            'menuContent': {
                templateUrl: 'templates/nb.html',
                controller: 'GalleryCtrl'
            }
        }
    })




      .state('app.lgn', {
        url: '/lgn',
        views: {
            'menuContent': {
                templateUrl: 'templates/lgn.html',
              
            },
            'fabContent': {
                template: ''
            }
        }
    })



    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

     .state('app.org', {
        url: '/org',
        views: {
            'menuContent': {
                templateUrl: 'templates/org.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

      .state('app.red', {
        url: '/red',
        views: {
            'menuContent': {
                templateUrl: 'templates/red.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');
});
 