app.controller('loan_single_controller', ['$scope','$window', '$injector', '$stateParams' , function($scope, $window, $injector, $stateParams) {
    $scope.type = $stateParams.type;

    switch ($scope.type){
        case "1":
            $scope.user.title = 'Personal Loan';
            break;
        case "2":
            $scope.user.title = 'Property Loan';
            break;
        case "3":
            $scope.user.title = 'Work Loan';
            break;
        case "4":
            $scope.user.title = 'Other Loan';
            break;
        default :
            $scope.user.title = 'Loan Form';
            break;
    }

    function round(x){
        return Math.round(x*100)/100;
    }

    $scope.calculate = function(){
        console.log(" calculate ");
        var principal = $scope.user.amount;
        var interest = $scope.user.interest / 100 / 12;
        var payments = $scope.user.years * 12;

        var x = Math.pow(1 + interest, payments);
        var monthly = (principal*x*interest)/(x-1);

        if (!isNaN(monthly) &&
            (monthly != Number.POSITIVE_INFINITY) &&
            (monthly != Number.NEGATIVE_INFINITY)) {

            $scope.user.month_payment = round(monthly);
            $scope.user.total_payment = round(monthly * payments);
            $scope.user.total_interest = round((monthly * payments) - principal);
        }
        // Otherwise, the user's input was probably invalid, so don't
        // display anything.
        else {
            $scope.user.month_payment = 0;
            $scope.user.total_payment = 0;
            $scope.user.total_interest = 0;
        }
    };

    $scope.submitFrom = function(){
        alert("ok");
    }

    $scope.formValidate = function (form, event) {

        var $validationProvider = $injector.get('$validation');
        $validationProvider.validate(form, event)
            .success(function () {

                // Actual function here
                $scope.submitFrom();

            })
            .error(function () {
                // console.log('Invalid form provided');
            });
    };

}]);