(function(){
'use strict';

angular.module ('LunchCheck', [])
 .controller('LunchCheckController', LunchCheckController);

//LunchCheckController.inject ("$scope");

function LunchCheckController ($scope) {
  $scope.lunchList = "";
  $scope.lunchMsg = "";
  $scope.inputMsg = "Emplty items (i.e, , ,) are not counted as input data."
  $scope.stateofBeeing = "hungry";
  $scope.msgcolor = "black";
  $scope.inputColor = "";

  $scope.checkLuchSize = function () {

    // Split the lunch list items that are separated by comma into an array
    var arrayOfStrings = $scope.lunchList.split(",");

    // Remove blank items
    for (var i = 0; i < arrayOfStrings.length; i++) {
      if (arrayOfStrings[i].trim().length == 0) {
        arrayOfStrings.splice (i, 1);
        i--;
      }
    }

    // Check for blank items
    if (arrayOfStrings.length == 0) {
      $scope.lunchMsg = "Please enter data first";
      $scope.msgcolor = "red";
      $scope.inputColor = "red";
    }
    else {
        $scope.msgcolor = "green";
        $scope.inputColor = "green";
      // check the array size
      if (arrayOfStrings.length > 3) {
         $scope.lunchMsg = "Too much!";

      } else {
        $scope.lunchMsg = "Enjoy!";
      }
    }

  }
}
})();
