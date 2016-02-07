angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $rootScope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

    $scope.logout = function() {
        if (localStorage.getItem('loggedUser')) {
            localStorage.setItem('loggedUser', null);
            $rootScope.loggedUser = false;
            console.log(localStorage.getItem('loggedUser'));
            console.log($rootScope.loggedUser);
            $state.go('login');
        }        
    }
})

.controller('LoginCtrl', function($scope, $rootScope, $state, $ionicLoading, $ionicPopup, $rootScope, $timeout, $stateParams, SocialAuthService, AuthService) {
    console.log("LoginCtrl: ENTERED");
    /* Memeber varialbes */
    $scope.loginData = {};
    $scope.loggedUser = {};
    var val;

    val = localStorage.getItem('loggedUser');
    console.log(val);
    console.log($rootScope.loggedUser);
    if ($rootScope.loggedUser) {
         console.log("Hello logged in ",localStorage.getItem('loggedUser'));
         $state.go('app.profile');        
    } 

    $scope.doLogin = function() {
        console.log("LoginCtrl:(doLogin): ENTERED");
        var ret;

        $ionicLoading.show();       
        console.log("LoginData ", $scope.loginData);
        ret = AuthService.loginAuth($scope.loginData);

        if (ret) {
             $ionicLoading.hide();
              localStorage.setItem('loggedUser', JSON.stringify(ret));
              $rootScope.loggedUser = true;
              $state.go('app.profile');            
        } else {
              $ionicLoading.hide();
              var alertPopup = $ionicPopup.alert({
                title: "Login Failed",
                template: "Please try again"
                });              
        }
        console.log("LoginCtrl:(doLogin): EXITED");
    }


    console.log("LoginCtrl: EXITED");

})

.controller('SignupCtrl', function($scope, $state, $ionicPopup, $ionicLoading, $timeout, $stateParams, SocialAuthService, AuthService) {
    console.log("SignupCtrl: ENTERED");
    /* Member varialbe */
    $scope.signupData = {};

    $scope.doSignup = function() {
        var ret=true;

        console.log("SignupCtrl:(doSignup): ENTERED");
        console.log("SignupCtrl ", $scope.signupData);
        $ionicLoading.show();

        ret = AuthService.signupAuth($scope.signupData); 
        if (ret) {
             $ionicLoading.hide();
              var alertPopup = $ionicPopup.alert({
                title: "Signup Successfull",
                template: "Now ready to login"
                });
              $state.go('login');
        } else {
              $ionicLoading.hide();
              var alertPopup = $ionicPopup.alert({
                title: "Signup Failed",
                template: "Please try again"
                });            
        }     

        console.log("SignupCtrl:(doSignup): EXITED");        
    }
    console.log("SignupCtrl: EXITED");

})

.controller('ForgotCtrl', function($scope, $state, $ionicLoading, $timeout, $stateParams, SocialAuthService,  DataService, AuthService) {
    console.log("ForgotCtrl: ENTERED");
    /* Memeber varialbe */
    $scope.forgotData = {};

    $scope.resetPassword = function() {
        console.log("ForgotCtrl:(resetPassword): ENTERED");
        $ionicLoading.show();       
        $timeout(function() {
            $ionicLoading.hide();
        }, 1000);        
        console.log("ForgotCtrl ", $scope.forgotData);
           AuthService.forgotPassword($scope.forgotData);
        console.log("ForgotCtrl:(resetPassword): EXITED");
        $state.go('login');         
    }

    console.log("ForgotCtrl: EXITED");

})

.controller('ProfileDataCtrl', function($scope, $state, $stateParams, SocialAuthService,  DataService, AuthService) {
    console.log("ProfileDataCtrl: ENTERED");
    /* Memeber varialbe */
   // $scope.data1 = {};
$scope.data1 = JSON.parse(localStorage.loggedUser);
    console.log("loggedUser", $scope.data1);
    $scope.doUpdate = function() {
     console.log("ProfileDataCtrl:(resetPassword): ENTERED");
       /* $ionicLoading.show();       
        $timeout(function() {
            $ionicLoading.hide();
        }, 1000);   */     
        console.log("ProfileDataCtrl ", $scope.data1);
           DataService.updateUsers($scope.data1);
        console.log("ProfileDataCtrl:(doUpdate): EXITED");
        //$state.go('login');         
    }

    console.log("ProfileDataCtrl: EXITED");

})


.controller('faqCtrl', function($scope, $state, faqService){
    $scope.items = faqService.getAll();
    $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

    
})

.controller('MediumCtrl', function($scope, DataService, $ionicPopup, $state) {

$scope.travelData = DataService.getMediumData();

$scope.doneBooking = function(){
var alertPopup = $ionicPopup.alert({
title: "Package ",
template: "Booking Successfull"
});
$state.go('app.medium');
};
})

.controller('BookingCtrl', function($scope, $state, $ionicPopup, $ionicLoading, $timeout, $stateParams, SocialAuthService, DataService) {
console.log("BookingCtrl: ENTERED");
/* Memeber varialbe */
$scope.bookData = {};
// Set Header
console.log("Booking Details ", $scope.bookData);
$scope.doBooking = function() {
var budget = $scope.bookData.select;
//var ret;
console.log("BookingCtrl:(doBooking): ENTERED");
$ionicLoading.show(); 
console.log("BookingCtrl: ", $scope.bookData);
DataService.createbook($scope.bookData); 

$ionicLoading.hide();
var alertPopup = $ionicPopup.alert({
title: "TravelData",
template: "Book Successfull"
});
if(budget === "Medium" ){
$state.go('app.medium');
}
else
{
$state.go('app.mediumdetail'); 
}
}; 

// console.log("BookingCtrl ", $scope.bookingData);
console.log("BookingCtrl:(doBooking): EXITED"); 
})

.controller('HighCtrl', function($scope, DataService, $ionicPopup, $state) {

$scope.highData = DataService.getHighData();

$scope.doneBooking = function(){
var alertPopup = $ionicPopup.alert({
title: "Package ",
template: "Booking Successfull"
});
$state.go('app.medium');
};
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionic.material.motion.fadeSlideInRight();

    // Set Ink
    ionic.material.ink.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, $ionicSideMenuDelegate, $cordovaGeolocation) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionic.material.motion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionic.material.motion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionic.material.ink.displayEffect();

    $ionicSideMenuDelegate.canDragContent(false)
  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
  $scope.options = {scrollwheel: true};
  
  $scope.markers = []
  // get position of user and then set the center of the map to that position
  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      $scope.map = {center: {latitude: lat, longitude: long}, zoom: 16 };
      //just want to create this loop to make more markers
      for(var i=0; i<3; i++) {
        $scope.markers.push({
            id: $scope.markers.length,
            latitude: lat + (i * 0.002),
            longitude: long + (i * 0.002),
            icon: $scope.markericon,
            title: 'm' + i
        })
      }
      
    }, function(err) {
      // error
    });
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionic.material.motion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionic.material.ink.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionic.material.ink.displayEffect();

    ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    ionic.material.motion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

});


