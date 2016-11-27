function postsController($scope, $http, Page) {
    Page.setTitle('Blog');
    //
    $http.get(Page.urlAPI('posts'))
        .success(function(response) {
            $scope.posts = php_crud_api_transform(response).posts;
        })
        .error(function(response) {
            console.log('Error: ' + response);
        });
}

module.exports = postsController;