function postsItemController($scope, $http, $stateParams, $location, Page) {
    Page.setTitle('Blog Item');
    //Show Item
    $http.get(Page.urlAPI('posts'))
        .success(function(response) {
            $scope.posts = php_crud_api_transform(response).posts[$stateParams.id];
            $scope.idItem = $stateParams.id;
            //
        })
        .error(function(response) {
            console.log('Error: ' + response);
        });
    //Show Coments Item
    $http.get(Page.urlAPI('post_coments'))
        .success(function(response) {
            $scope.post_coments = php_crud_api_transform(response).post_coments;
            //
        })
        .error(function(response) {
            console.log('Error: ' + response);
        });
    //New Coment
    $scope.addComent = function() {
        $http.post(Page.urlAPI('post_coments'),
            {
                // pid: $scope.pid,
                // uid: $scope.uid,
                // coment: $scope.coment,
                // date: $scope.date,
                // active: $scope.active
                pid: $scope.idItem,
                uid: 1,
                coment: $scope.coment,
                date: Date.parse(Date()),
                active: 1
            })
            .success(function(response) {
                //$location.path("/");
                console.log("Comentario agregado..");
            })
            .error(function(response) {
                console.log('Error: ' + response);
            });
    }
}

module.exports = postsItemController;




// (function(){
//   var app = angular.module('blogApp',[]);
//
//   app.controller('BlogController', ['$http', function($http){
//
//     var blog = this;
//     blog.title = "AngularJS Blog App";
//
//     blog.posts = {};
//     $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
//       blog.posts = data;
//     });
//
//     blog.tab = 'blog';
//
//     blog.selectTab = function(setTab){
//       blog.tab = setTab;
//       console.log(blog.tab)
//     };
//
//     blog.isSelected = function(checkTab){
//       return blog.tab === checkTab;
//     };
//
//     blog.post = {};
//     blog.addPost = function(){
//       blog.post.createdOn = Date.now();
//       blog.post.comments = [];
//       blog.post.likes = 0;
//       blog.posts.unshift(this.post);
//       blog.tab = 0;
//       blog.post ={};
//     };
//
//   }]);
//
//   app.controller('CommentController', function(){
//     this.comment = {};
//     this.addComment = function(post){
//       this.comment.createdOn = Date.now();
//       post.comments.push(this.comment);
//       this.comment ={};
//     };
//   });
//
// })();