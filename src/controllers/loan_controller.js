app.controller('loan_controller', ['$scope', '$state', function ($scope, $state) {
    $scope.user={
        name : '',
        number : '',
        email : '',
        amount : 0,
        interest : 0,
        years : 0,
        month_payment : 0,
        total_payment : 0,
        total_interest : 0,
        title : 'Loan Form'
    }

    $scope.showForm = function(type){
        $state.transitionTo('loan.single', {type: type}, {reload: true});
    }

    $scope.cancelForm = function(){
        $state.transitionTo('loan.list', '', {reload: true});
    }


}]);