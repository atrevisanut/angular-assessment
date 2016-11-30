angular.module('assessment')
.controller('detailsCtrl', function($scope, $http, $stateParams, mainSvc){
    
    // console.log($stateParams);
    $scope.getDetails = mainSvc.getDetails($stateParams.id)
    .then(function(response){
      $scope.product = response;
    });

});

 