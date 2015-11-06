var app = app || {};

(function(){

app = angular.module('flick', ['ngRoute', 'ngAnimate']);


app.config(function($routeProvider){

    $routeProvider
        .when('/', {
                controller: 'listController',
                templateUrl: 'views/listView.html'
            })
        .when('/photo/:id', {
                controller: 'detailController',
                templateUrl: 'views/detailView.html'
            })
        .otherwise({ redirectTo: '/' });
})

})();