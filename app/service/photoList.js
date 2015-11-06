var app = app || {};

(function(){

    app.factory('photoList', function($http){

        var photoList = {};
        
        photoList.getData = function(){
            //return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
            return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tagmode=all&format=json&jsoncallback=JSON_CALLBACK')

            .then(function successCallback(response) {
                return response.data.items;
              }, function errorCallback(response) {
                console.log(response);
                
            });
        }

        return photoList;
    })


})();