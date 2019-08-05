(function(angular) {
  'use strict';
function PostListController($scope, $element, $attrs, $http) {
  var ctrl = this;
  $scope.hidden = true;
  $http({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    responseType: "json"
  }).then(function(data) {
    ctrl.list = data.data;
  });

  ctrl.updatePost = function(post, prop, value) {
    post[prop] = value;
  };

  ctrl.deletePost = function(post) {
    var idx = ctrl.list.indexOf(post);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };

  ctrl.showBody = function(post, comments){
    ctrl.postClicked = post;
    $scope.hidden = false;
    $http({
        url: "https://jsonplaceholder.typicode.com/comments?postId=" + post.id,
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        responseType: "json"
      }).then(function(data) {
        ctrl.listComment = data.data;
      });
  }

}

angular.module('postApp').component('postList', {
  templateUrl: 'assets/templates/postList.html',
  controller: PostListController
});
})(window.angular);