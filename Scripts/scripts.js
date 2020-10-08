var myApp = angular.module("app1", ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.
        when('/login', {
            templateUrl: 'login.html',
            controller: 'loginController'

        }).

        when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'

        }).
        when('/register', {
            templateUrl: 'register.html',
            controller: 'registerController'

        }).
        otherwise({
            redirectTo: '/login'
        })


}])