(function () {
    'use-strict';

    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.checkLunch = function () {
            const lunchString = $scope.lunch;

            if (lunchString == null) {
                $scope.message = "Please enter data first";
                return;
            }

            const lunchItems = lunchString.split(",");
            let numberItems = 0;

            for (let i = 0; i < lunchItems.length; i++) {
                // check the lunchItem isn't whitespace and has characters.
                if (lunchItems[i].trim() != "" && lunchItems[i] != null) {
                    numberItems++;
                }
            }

            if (numberItems > 3) {
                $scope.message = "Too much!";
            } else if (numberItems > 0) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Please enter data first";
            }
        };

    }

})();