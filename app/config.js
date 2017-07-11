collab.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('login',{
            url: '/login',
            templateUrl :'views/login.html',
            controller : 'LoginController'
        })
        .state('sign-up',{
            url:'/sign-up',
            templateUrl:'views/sign-up.html'
        })
        .state('contact-us',{
            url:'/contact-us',
            templateUrl:'views/contact-us.html'
        })
        .state('principal',{
            url:'/principal',
            templateUrl:'views/principal.html'
        })
        .state('candidate',{
        url:'/candidate',
        templateUrl:'views/Candidate.html'
        })
        .state('profile',{
            url:'/profile',
            templateUrl:'views/profile.html'
        })
});