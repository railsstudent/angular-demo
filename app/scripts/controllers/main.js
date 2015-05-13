'use strict';

/**
 * @ngdoc function
 * @name mydemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mydemoApp
 */
angular.module('mydemoApp')
  .controller('MainCtrl', function ($scope, MainFactory) {

    $scope.teams  = [ { key: 'Production', name: 'Production'}, {key: 'Distribution', name: 'Distribution'}, 
    	{key: 'QA', name: 'QA'}, {key: 'Architecture', name: 'Architecture & DBA'}, 
    		{key: 'M3', name: 'M3/Procurement/HR/EDI'}];

    $scope.team = '';
    $scope.message = '';
    $scope.company = 'TAL';
    $scope.newjoin = '';
    $scope.errMessage = '';

	$scope.selectedTeam = {
		manager : '',
		members : []		
	};
	$scope.addNewJoin = function _addNewJoin() {
		$scope.selectedTeam.members.push($scope.newjoin);
		$scope.message = $scope.newjoin + " joins production team.";
		$scope.newjoin = '';
	}

	$scope.isProductionTeam = function _isProductionTeam() {
		return $scope.team.key === 'Production';
	}

	$scope.loadTeamData = function _loadTeamData() {
		$scope.message = '';
		$scope.errMessage = '';
		if ($scope.team == null) {
			$scope.selectedTeam.manager = '';
			$scope.selectedTeam.members = '';
			return;
		}
		MainFactory.loadTeamData().get({team : $scope.team.key }, 
			function(response) {
				$scope.selectedTeam.manager = response.manager;
				$scope.selectedTeam.members = response.members;
			}, function(response) {
				$scope.errMessage = 'Unable to load data of ' + $scope.team.name;
				$scope.selectedTeam.manager = '';
				$scope.selectedTeam.members = '';
		});
	}

  });
