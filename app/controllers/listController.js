var app = app || {};

(function(){
	app.filter('dateSuffix', function($filter) {
	  var suffixes = ["th", "st", "nd", "rd"];
	  return function(input) {
	    var day = $filter('date')(input, 'd');
	    var month = $filter('date')(input, 'MMM yyyy')
	    var hour = $filter('date')(input, 'h:mm')
	    var relevantDigits = (day < 30) ? day % 20 : day % 30;
	    console.log(day, relevantDigits);
	    var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
	    return day+suffix+' '+month+' at '+hour;
	  };
	});

	app.controller('listController', ['$scope','photoList', function ($scope, photoList, $location){

		var photoPromise = photoList.getData();

		photoPromise.then(function(data){
			console.log(data);
			$scope.photos = data;
		})

		console.log($scope.photos);



		$scope.selectedPhoto = function(photo){
			var id = $scope.photos[photo].link.split('/');
			var urlId = id[id.length-2];

			$scope.chosenPhoto = $scope.photos[photo];


			console.log($scope.chosenPhoto);
		}
	}]);

})();