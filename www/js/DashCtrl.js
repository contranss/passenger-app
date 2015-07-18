 angular.module('starter.controllers').controller('DashCtrl', function($scope) {
 	$scope.processWithTracking = function() {
        $state.go('');
    };
    $scope.processWithComplaints = function() {
        $state.go('tab.users/complaints');
    };
    $scope.processWithNotification = function() {
        $state.go('');
    };
  });