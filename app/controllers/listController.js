var app = app || {};

(function(){
	

	app.controller('listController', ['$scope','photoList','$location', '$routeParams', function ($scope, photoList, $location){

		var photoPromise = photoList.getData();

		photoPromise.then(function(data){
			$scope.photos = data;
		})

		$scope.selectedPhoto = function(photo){
			var id = $scope.photos[photo].link.split('/');
			var urlId = id[id.length-2];

			photoList.chosenPhoto = $scope.photos[photo];

			$location.path('/photo/'+urlId);
			
		}
	}]);

})();