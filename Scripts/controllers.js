
myApp.controller('loginController',
  ['$scope', '$location', '$http',
    function ($scope, $location, $http,) {
      console.log("Inside login controller")
      $scope.loginForm = {};

      $scope.login = function () {

        $http({
          method: 'GET',
          url: "http://127.0.0.1:8080/api/login?email=" + $scope.loginForm.email + "&password=" + $scope.loginForm.password,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(response) {
          console.log(response)
          console.log(response.data.status);
          if (response.status === 200 && response.statusText === "OK") {
            $location.path('/home')
          } else if (response.status === 201) {
            $scope.msg = "Incorrect password or emailId";
            console.log($scope.msg);
          }
        }, function errorCallback(error) {
          console.log(error);
        });

      }


    }]);

myApp.controller('logoutController',
  ['$scope', '$location', 'AuthService',
    function ($scope, $location,) {

      $scope.logout = function () { }


    }]);

angular.module('app1').controller('registerController',
  ['$scope', '$location', '$http',
    function ($scope, $location, $http) {


      $scope.register = function () {


        $http({
          url: "http://127.0.0.1:8080/api/CreateUser?email=" + $scope.registerForm.email + "&password=" + $scope.registerForm.password,
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function successCallback(response) {
          console.log(response);
          if (response.data.StatusCode === '200') {
            $scope.msg = "User created Successfully"
            console.log($scope.msg);
          }
          else if (response.data.StatusCode === '1000') {
            $scope.msg = "User already registered"
            console.log($scope.msg);
          }
        }, function errorCallback(error) {
          console.log(error);
        });

      };


    }]);

myApp.controller('homeController',
  ['$scope', '$location', '$http',
    function ($scope, $location, $http,) {
      console.log("Inside home controller")

      // $scope.upload = function (File) {

      // }

      $scope.data = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ]


    }]);


myApp.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);