angular.module('assessment')
.service('mainSvc', function($http){

    this.getApi = function(){
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        }).then(function(response){
            return response;
        })
    }


    this.getDetails = function(id){
          return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products/' + id
      }).then(function(response){
        return response.data;
      });
    };
    

})