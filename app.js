

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {

    // use the HTML5 History API & set HTM5 mode true
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }

    $routeProvider
    .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })

    .when('/blog', {
        templateUrl: 'pages/blog.html',
        controller: 'BlogController'
    })

    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'AboutController'
    })

    .otherwise({ redirectTo: '/' });
}]);

app.controller('HomeController', function ($scope) {
    $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function ($scope) {
    $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function ($scope) {
    $scope.message = 'Hello from AboutController';
});
