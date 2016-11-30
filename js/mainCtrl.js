angular.module('assessment').controller('mainCtrl', function($scope, mainSvc, products){

    $scope.productss = products;
    console.log(products);

})