var myApp = angular.module("app1", ['ngRoute']);


myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider.
        when('/login', {
            templateUrl: 'login.html',
            controller: 'loginController',
            access: { restricted: false }
        }).
        when('/logout', {
            templateUrl: 'logout.html',
            controller: 'logoutController',
            access: { restricted: true }
        }).
        when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController',
            access: { restricted: true }
        }).
        when('/register', {
            templateUrl: 'register.html',
            controller: 'registerController',
            access: { restricted: false }
        }).
        otherwise({
            redirectTo: '/login'
        })


}])