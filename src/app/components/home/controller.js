function homeController($scope, $http, Page) {
    Page.setTitle('Inicio');
    console.log("Cargo");
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