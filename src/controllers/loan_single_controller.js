app.controller('loan_single_controller', ['$scope','$window', '$injector', '$stateParams' , function($scope, $window, $injector, $stateParams) {
    $scope.type = $stateParams.type;
    $scope.message = "";
    $scope.responseShow = 0;

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
        else {
            $scope.user.month_payment = 0;
            $scope.user.total_payment = 0;
            $scope.user.total_interest = 0;
        }
    };

    $scope.submitFrom = function(){
        $scope.responseShow = 1;
        if($scope.user.name != '' && $scope.user.number != '' && $scope.user.email != '' && $scope.user.amount != 0 && $scope.user.interest != 0 && $scope.user.years != 0){
            $scope.message = "Success! We will get back to you shortly!";
            document.getElementById("response_div").style.color = "green";
        }else{
            $scope.message = "Please Provide All Data";
            document.getElementById("response_div").style.color = "red";
        }
    }

}]);