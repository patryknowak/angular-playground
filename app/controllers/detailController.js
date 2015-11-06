var app = app || {};

(function(){


	app.controller('detailController', ['$scope', '$routeParams','RecipeList', function ($scope, $routeParams, RecipeList) {

        var recipe = RecipeList.selectedRecipe ? RecipeList.selectedRecipe : RecipeList.filterByUrl($routeParams.name);

    });
    
})();