var app = app || {};

(function(){


	app.controller('detailController', ['$scope', '$routeParams','photoList', function ($scope, $routeParams, photoList) {

        //var recipe = RecipeList.selectedRecipe ? RecipeList.selectedRecipe : RecipeList.filterByUrl($routeParams.name);

        //console.log(photoList.chosenPhoto);

        $scope.chosenPhoto = photoList.chosenPhoto;

        console.log(photoList.chosenPhoto)

        $scope.chosenPhoto.tagList = photoList.chosenPhoto.tags.split(" ");

    }]);

})();