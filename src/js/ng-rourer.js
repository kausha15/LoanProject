app.config(['$stateProvider', '$urlRouterProvider', '$provide', '$httpProvider', function ($stateProvider, $urlRouterProvider, $provide, $httpProvider) {
    $urlRouterProvider.otherwise("/loan/list");
    $stateProvider.state('loan', {
        url: "/loan",
        templateUrl: "./views/loan.html",
        controller: 'loan_controller'
    })
        .state('loan.list', {
            url: "/list",
            templateUrl: "./views/loan_list.html",
            controller: 'loan_list_controller'
        })
        .state('loan.single', {
            url: "/single/{type}",
            templateUrl: "./views/loan_single.html",
            controller: 'loan_single_controller'
        })
}]);