function anuncioAddController($scope, $http, $location, Page) {
    Page.setTitle('Agregar Anuncio');
    //
    //Create persona
    $scope.addPerson = function() {
        $http.post('http://localhost/mundicar/src/api/api.php/publicaciones',
            {
                cod: $scope.cod,
                mrc: $scope.mrc,
                modelo: $scope.modelo,
                anio: $scope.anio,
                motor: $scope.motor,
                combustible: $scope.combustible,
                km: $scope.km,
                color: $scope.color,
                volante: $scope.volante,
                trans: $scope.trans,
                strans: $scope.strans,
                cap: $scope.cap,
                tdmotor: $scope.tdmotor,
                precio: $scope.precio,
                condicion: $scope.condicion,
                airea: $scope.airea,
                lunase: $scope.lunase,
                equipor: $scope.equipor,
                sonroof: $scope.sonroof,
                asiento: $scope.asiento,
                baire: $scope.baire,
                foto1: $scope.foto1,
                foto2: $scope.foto2,
                foto3: $scope.foto3,
                foto4: $scope.foto4,
                freg: $scope.freg,
                obs: $scope.obs,
            })
            .success(function(response) {
                $location.path("/");
            })
            .error(function(response) {
                console.log('Error: ' + response);
            });
    }
}

module.exports = anuncioAddController;