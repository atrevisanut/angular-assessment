angular.module('assessment', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

    $stateProvider
        .state('about',{
            url:'/about',
            templateUrl: './../views/about.html'
            // controller: 'mainCtrl'
        })
        .state('blog',{
            url:'/blog',
            templateUrl: './../views/blog.html'
            // controller: 'mainCtrl'
        })
        .state('home',{
            url:'/home',
            templateUrl: './../views/home.html'
            // controller: 'mainCtrl'
        })
        .state('details',{
            url:'/product-details/:id',
            templateUrl: './../views/product-details.html',
            controller: 'detailsCtrl'
        })
        .state('product-tmpl',{
            url:'/product-tmpl',
            templateUrl: './../views/product-tmpl.html'
            // controller: 'mainCtrl'
        })
        .state('shop',{
            url:'/shop',
            templateUrl: './../views/shop.html',
            controller: 'mainCtrl',
            resolve: {
                products: function(mainSvc){
                    return mainSvc.getApi().then(function(response){
                        console.log(response);
                        return response.data;
                    })
                }
            }
        })
    $urlRouterProvider.otherwise('home');

});