 angular.module('starter.controllers').controller('DashCtrl', function($scope) {
    $scope.processWithComplaints = function() {
        $state.go('tab.users/complaints');
    };
    $scope.processWithTracking = function() {
        $state.go('');
    };
  });