'use strict';

/**
 * @ngdoc function
 * @name raizenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raizenApp
 */
angular.module('raizenApp')
  .controller('HomeCtrl', function ($scope, $rootScope, $http) {
    $rootScope.body_class = 'page-boxed page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-sidebar-closed-hide-logo';
    $rootScope.dashboard_active = true;
    $scope.loading_data = true;
    $http.get('http://localhost:8000/daily_info').success(function(data){
    	var today_info = angular.fromJson(data)

    	$scope.session_counter = today_info[0].fields.session_counter; 
    	$scope.page_counter = today_info[0].fields.page_counter;
        $scope.page_avg = today_info[0].fields.page_avg;
    	var today_timedelta = today_info[0].fields.timedelta_avg;
    	var s = ( today_timedelta % 60 ).toString();
    	var m = ( parseInt( (today_timedelta % 3600) / 60 ) ).toString();
    	var h = ( parseInt( today_timedelta / 3600 ) ).toString();
    	$scope.timedelta_avg = h+"h"+m+"m"+s+"s";
    	$scope.loading_data = false;

        
        
        $scope.chartObject = {
            "type": "AreaChart",
            "displayed": true,
            "data": {
            "cols": [
                {
                    "id": "month",
                    "label": "Month",
                    "type": "string",
                    "p": {}
                },
                {
                    "id": "visits-id",
                    "label": "Visitantes",
                    "type": "number",
                    "p": {}
                }
            ],
            "rows": []
              },
              "options": {
                "isStacked": "false",
                "fill": 20,
                "displayExactValues": true,
              },
              "formatters": {}
        }
        today_info.forEach(function(info){
            var row = new Object();
            var date_row = new Object();
            var value_row = new Object();
            row.c = [];
            date_row['v'] = info.fields.creation_date;
            value_row['v'] = info.fields.session_counter;
            row.c.push(date_row);
            row.c.push(value_row);
            $scope.chartObject.data.rows.push(row);
        });
    });
  });
