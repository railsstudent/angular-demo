'use strict';

angular.module('mydemoApp')
  .factory('MainFactory', function ($resource) {
    
    return {
    	loadTeamData : function _loadTeamData() {
    		// return a promise
    		return $resource('it/:team.json', { team : '@id' });
    	}
    }
  });
