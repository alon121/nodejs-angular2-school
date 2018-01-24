
coolApp.controller('shipperCtrl', function($scope, shipperService) {
    $scope.headerText = 'hi customer';
    shipperService.getShippers(function(res) {
        const arr = res.data;
        $scope.keys = Object.keys(arr[0]);
        $scope.shippers = (res.data);
    }, function(res) {});
  
});