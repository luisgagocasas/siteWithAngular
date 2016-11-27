function postsItemController($scope, $http, $stateParams, Page) {
    Page.setTitle('Blog Item');
    //
    $http.get(Page.urlAPI('posts'))
        .success(function(response) {
            $scope.posts = php_crud_api_transform(response).posts[$stateParams.id];
            //
        })
        .error(function(response) {
            console.log('Error: ' + response);
        });
}

module.exports = postsItemController;