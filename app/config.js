collab.config(function($stateProvider, $urlRouterProvider) {
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

});