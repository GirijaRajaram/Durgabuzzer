angular.module('starter.services', [])


.factory('AuthService', function(DataService) {
  // Might use a resource here that returns a JSON array

  var offers = [
    { title: 'BigBazzer', id: 1, img: 'bigbazzer.jpg'},
    { title: 'PizzaHut', id: 2, img: 'pizza-hut.jpg' },
    { title: 'MakeMyTrip', id: 3, img: 'make_my_trip.jpg' },
    { title: 'FoodPanda', id: 4, img: 'foodpanda.jpg' },
    { title: 'Coffee Day', id: 5, img: 'cafe-coffee.jpg' },
    { title: 'Redbus', id: 6, img: 'redbus.jpg' }
  ];
  

  return {
    loginAuth: function(authData) {
      var userObj = {};
      console.log("Hi i am in loginAuth");
      console.log(authData);
      console.log(DataService.getAllUsers());
      userObj = DataService.getUserByUsername(authData.email);
      console.log(userObj);
      if (userObj != null) {
        if (userObj.password === authData.password) {
            console.log("valid user");
            console.log(userObj);
            return userObj;
        }
      } else {
        console.log("Invalid login");
        return null;
      }    
      
    },  
    signupAuth: function(authData) {
      console.log("Hi i am in signupAuth");
      console.log(authData);
      DataService.createUsers(authData);
      return true;
    },    
      forgotPassword: function(authData) {
      console.log("Hi i am in forgotPassword");
      console.log(authData);
      var check = DataService.getUserByUsername(authData.email);
      /*if(check == null)
      {
        alert("Please do Signup");
      }
      else{*/
        DataService.update(authData);
    //  }
      return true;
    }
  };
})


.factory('DataService', function() {
  // Might use a resource here that returns a JSON array

  var userData = [
    { username: 'aaa@gmail.com', id: 1, phone: '9876543210', name: 'Senthil-alpha', password: 'asdfghjkl', img: 'avatar.png'},
    { username: 'bbb@gmail.com', id: 2, phone: '9876543210', name: 'Senthil-beta', password: 'asdfghjkl', img: 'avatar.png' },
    { username: 'ccc@gmail.com', id: 3, phone: '9876543210', name: 'Senthil-gamma', password: 'asdfghjkl', img: 'avatar.png' },
    { username: 'ddd@gmail.com', id: 4, phone: '9876543210', name: 'Senthil-theta', password: 'asdfghjkl', img: 'avatar.png' },
    { username: 'eee@gmail.com', id: 5, phone: '9876543210', name: 'Senthil-omega', password: 'asdfghjkl',img: 'avatar.png' },
    { username: 'fff@gmail.com', id: 6, phone: '9876543210', name: 'Senthil-pi', password: 'asdfghjkl', img: 'avatar.png' }
  ];

  var offers = [
    { title: 'BigBazzer', id: 1, img: 'bigbazzer.jpg'},
    { title: 'PizzaHut', id: 2, img: 'pizza-hut.jpg' },
    { title: 'MakeMyTrip', id: 3, img: 'make_my_trip.jpg' },
    { title: 'FoodPanda', id: 4, img: 'foodpanda.jpg' },
    { title: 'Coffee Day', id: 5, img: 'cafe-coffee.jpg' },
    { title: 'Redbus', id: 6, img: 'redbus.jpg' }
  ];

  var highdata = [
{ id: 0, time:'24x7', vehile: 'cab', type:'bus', room: 'PG- single sharing'},
{ id: 1, time:'full hours',vehile: 'cab', type:'train-3tier', room: 'PG 2BHK'},
{ id: 2, time:'24x7',vehile: 'auto', type:'bus-sleeper', room: 'PG 2sharing'},
{ id: 3, time:'24x7',vehile: 'cab', type:'train-AC', room: 'PG 2BHK'},
{ id: 4, time:'full hours',vehile: 'auto', type:'train- 2tier', room: 'PG 2BHK'},
{ id: 5, time:'24x7',vehile: 'cab', type:'bus', room: 'PG 2BHK'}
];

var mediumdata = [
{ id: 0, time:'24x7', vehile: 'cab mini', type:'bus sleeper', room: 'PG- five sharing'},
{ id: 1, time:'full hours',vehile: 'cab ox', type:'train second class', room: ' womens hostal'},
{ id: 2, time:'24x7',vehile: 'auto', type:'bus-sleeper', room: 'PG 3sharing'},
{ id: 3, time:'24x7',vehile: 'cab mini', type:'train-AC', room: 'PG 4BHK'},
{ id: 4, time:'full hours',vehile: 'auto', type:'train- general', room: 'PG 2BHK'},
{ id: 5, time:'24x7',vehile: 'cab', type:'bus-semisleeper', room: 'PG 2BHK'}
];
  // Private Functions
    function getUsersDB() {
        console.log("connecting to DB:Get");
        if(!localStorage.getItem('usersDB')){
            //window.localStorage['usersDB', JSON.stringify([])];
            localStorage.setItem('usersDB', JSON.stringify([]));
        }

        return JSON.parse(localStorage.getItem('usersDB'));
        //return JSON.parse(window.localStorage['usersDB']);
    }

    function setUsersDB(users) {
         console.log("connecting to DB:Set");

         localStorage.setItem('usersDB', JSON.stringify(users));
         //window.localStorage['usersDB', JSON.stringify(users)];
    }

function getbook() {
        console.log("connecting to DB:Get");
        if(!localStorage.getItem('book')){
            //window.localStorage['usersDB', JSON.stringify([])];
            localStorage.setItem('book', JSON.stringify([]));
        }

        return JSON.parse(localStorage.getItem('book'));
        //return JSON.parse(window.localStorage['usersDB']);
    }

    function setbook(users) {
         console.log("connecting to DB:Set");

         localStorage.setItem('book', JSON.stringify(users));
         //window.localStorage['usersDB', JSON.stringify(users)];
    }
  return {
    all: function() {
      return chats;
    },
    getAllUsers: function() {
      return getUsersDB();
    }, 
    getUserByUsername: function(username) {
      var userData = getUsersDB();
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].username == username) {
          return userData[i];
        }
      }
      return null;
    }, 
    getMediumData: function() {
return mediumdata;
}, 
getHighData: function() {
return highdata;
},

    createUsers: function(user) {
      var users = getUsersDB();
      users.push(user);
      setUsersDB(users);
      console.log("Testing localstorage");
      console.log(getUsersDB());
    },  
    updateUsers: function(user) {
      var users = getUsersDB();
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(user.id)) {
          users[i].username = user.username;
          users[i].phone = user.phone;
          users[i].name = user.name;
          //users[i].password = user.password;
          users[i].age = user.age;
          setUsersDB(users);
          console.log(users[i]);
        }
      }           
      console.log("Update function");
      console.log(getUsersDB());
    },     

    update: function(user) {
      var users = getUsersDB();
      for (var i = 0; i < users.length; i++) {
        if (users[i].email == user.email) {
          users[i].password = user.password;
          
          setUsersDB(users);
          console.log(users[i]);
        }
      }           
      console.log("Update function");
      console.log(getUsersDB());
    },  

    createbook: function(user) {
      var users = getbook();
      users.push(user);
      setbook(users);
      console.log("Testing localstorage");
      console.log(getbook());
    },          
    getAllOffers: function() {
      console.log("Hi i am in getAllOffers service");
      return offers;
    },  
    getOffer: function(offerId) {
      for (var i = 0; i < offers.length; i++) {
        if (offers[i].id === parseInt(offerId)) {
          return offers[i];
        }
      }
      return null;
    },    
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('faqService', function(){
  var items = [{
      title: 'How to detect the danger area?',
      text: 'Whenever you enter the danger area, the profile settings cover page will turn into red color. In this situation this app will tell show some basic tips to control your mind and make you as calm.'
    },
    {
      title: 'How to Protect yourself from Danger area?',
      text: 'When you enter into the red location Durga buzzer automatically will send pre alert message to My Durga Group. In this red area you can chat with your My Durga group. This will make feel like you were protected by some one. This screen also have voice detection to recoganize the hotword "Help me Durga".'
    },
    {
      title: 'How do i book the cab in durgabuzzer?',
      text: 'You can easily book a ticket using our Mobile Application by simply selecting the different packages we offers for you.'
    },
    {
      title: 'How Durgabuzzer is safe?',
      text: 'we have been working steadily on building a great product for customers and more women cab drivers. We have security experts and continue to work with the best of security experts in the industry to make Durga safe and secure for our customers.'
  }];
  return {
    getAll : function(){
      return items;
    }
    
  };
})

.factory('SocialAuthService', function(DataService) {

  var providers = [
                    {
                      'id': 0,
                      'name': 'facebook'
                    },
                    {
                      'id': 1,
                      'name': 'Googleplus'
                    },
                    {
                      'id': 2,
                      'name': 'Twitter'
                    }, 
                    {
                      'id': 3,
                      'name': 'LinkedIn'
                    }                                       
                  ];

    return {
      validateFacebook : function(authData) {
          console.log("SocialAuthService:(validateFacebook)=> ENTERED");
          // Main logic here 
          console.log("SocialAuthService:(validateFacebook)=> EXITED");
      },
      validateGoogle : function(authData) {
          console.log("SocialAuthService:(validateGoogle)=> ENTERED");
          // Main logic here 
          console.log("SocialAuthService:(validateGoogle)=> EXITED");
      },
      validateTwitter : function(authData) {
          console.log("SocialAuthService:(validateTwitter)=> ENTERED");
          // Main logic here 
          console.log("SocialAuthService:(validateTwitter)=> EXITED");
      },
      validateLinkedIn : function(authData) {
          console.log("SocialAuthService:(validateLinkedIn)=> ENTERED");
          // Main logic here 
          console.log("SocialAuthService:(validateLinkedIn)=> EXITED");
      }
    };
});
