
angular.module('app1').controller('loginController',
  ['$scope', '$location', '$http',
    function ($scope, $location, $http) {
      console.log("Inside login controller")
      $scope.loginForm = {};
      $scope.login = function () {


        $http({
          url: "http://127.0.0.1:8080/login?email=" + $scope.loginForm.email + "&password=" + $scope.loginForm.password,
          method: 'POST'
        }).then(function onSuccess(response) {

          $scope.employeelist = response;

        })
      };

    }]);

angular.module('app1').controller('logoutController',
  ['$scope', '$location', 'AuthService',
    function ($scope, $location,) {

      $scope.logout = function () { }


    }]);

angular.module('app1').controller('registerController',
  ['$scope', '$location', 'AuthService',
    function ($scope, $location) {

      $scope.register = function () { }



    }]);