angular.module('Home', []);
angular.module('Examples', []);

angular.module('BasicHttpAuthExample', [
    'Home',
    'Examples',
    'ngRoute',
    'ngAnimate'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/example-1', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-1.html'
        })
        .when('/example-2', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-2.html'
        })
        .when('/example-3', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-3.html'
        })
        .when('/example-4', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-4.html'
        })
        .when('/example-5', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-5.html'
        })
        .when('/example-6', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-6.html'
        })
        .when('/example-7', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-7.html'
        })
        .when('/example-8', {
            cache: false,
            controller: 'ExamplesController',
            templateUrl: 'modules/examples/views/example-8.html'
        })
        .when('/', {
            cache: false,
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })
        .otherwise({
            redirecTo: '/home'
        });
}])

.run(function ($rootScope, $location) {
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        if ($location.path() && $location.path() !== '/' && $location.path() !== '/#') {
            $rootScope.backButtonShow = true;
            $rootScope.pageName = $location.path();
        }
        else {
            $rootScope.pageName = "";
            $rootScope.backButtonShow = false;
        }
    });
});
