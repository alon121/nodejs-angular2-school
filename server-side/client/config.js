coolApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "hello",
    })
    .when("/shippers", {
        templateUrl : "shippers/shippers.view.html",
        controller: 'shipperCtrl'

    })
});