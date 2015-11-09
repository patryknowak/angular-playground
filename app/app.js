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
        //.otherwise({ redirectTo: '/' });
})

app.filter('dateSuffix', function($filter) {
	  var suffixes = ["th", "st", "nd", "rd"];
	  return function(input) {
	    var day = $filter('date')(input, 'd');
	    var month = $filter('date')(input, 'MMM yyyy')
	    var hour = $filter('date')(input, 'h:mm')
	    var relevantDigits = (day < 30) ? day % 20 : day % 30;
	    
	    var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
	    return day+suffix+' '+month+' at '+hour;
	  };
	});

})();