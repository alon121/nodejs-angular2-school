
coolApp.service('shipperService', function($http) {
    this.getShippers = function(onSuccess, onError ) {
        $http({
            url: 'http://localhost:770/shippers',
            method: 'GET',
            params: {}
        }).then(onSuccess, onError);
    }
});
