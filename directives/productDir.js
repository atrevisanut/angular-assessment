angular.module('assessment')
.directive('products', function(){
    return{
        templateUrl: './../views/product-tmpl.html',
        restrict: 'E',
        scope:{
            products: '='
        },
        controller: function($scope, mainSvc){
            $scope.test = "TESSTTTTTTT";

        }
    }
})

