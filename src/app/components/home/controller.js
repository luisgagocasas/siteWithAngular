function homeController($scope, $http, Page) {
    Page.setTitle('Portada');
    //
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 1170 + slides.length + 1;
        slides.push({
            image: '//unsplash.it/' + newWidth + '/450/?random',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
    //Read
    $http.get('http://localhost/mundicar/src/api/api.php/publicaciones')
        .success(function(response) {
            $scope.publicaciones = php_crud_api_transform(response).publicaciones;
            console.log(php_crud_api_transform(response).publicaciones)
        })
        .error(function(response) {
            console.log('Error: ' + response);
        });
 
    /*
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