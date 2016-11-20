function homeController($scope, $http, Page) {
    Page.setTitle('Inicio');
    console.log("Cargo ");
    //
    /*
    $scope.names = [ ];
    $http.get('http://localhost:8000/')
        .success(function(data) {
                $scope.names = eval(data);
                console.log(data)
            })
        .error(function(data) {
                console.log('Error: ' + data);
        });
 
    $scope.addNom = function() {
        $http.post('http://localhost:8000/', { op: 'append', nom: $scope.nom, telefon: $scope.telefon } )
            .success(function(data) {
                    $scope.names = eval(data);
                    console.log(data)
                })
            .error(function(data) {
                    console.log('Error: ' + data);
            });
 
        $scope.nom="";
        $scope.telefon="";
    }
 
    $scope.delNom = function( nom ) {
        if ( confirm("Seguro?") ) {
            $http.post('http://localhost:8000/', { op: 'delete', nom: nom } )
            .success(function(data) {
                $scope.names = eval(data);
                console.log(data)
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
        }
    }
    */
}

module.exports = homeController;