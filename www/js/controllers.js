angular.module('starter.controllers', [])

	.controller('DashCtrl', function($scope) {
	 	$scope.processWithTracking = function() {
	        $state.go('');
	    };
	    $scope.processWithComplaints = function() {
	        $state.go('tab.users-complaints');
	    };
	    $scope.processWithNotification = function() {
	        $state.go('');
	    };

	})

	.controller('usersCtrl', function($scope, Chats) {})

	.controller('NotificationCtrl', function($scope) {})

	.controller('AccountCtrl', function($scope) {});
