(function(angular) {
  'use strict';
function PostCommentController($scope, $element, $attrs, $http) {
  var ctrl = this;
}

angular.module('postApp').component('postComment', {
  templateUrl: 'assets/templates/postComment.html',
  controller: PostCommentController,
  bindings: {
    comment : '<'
  }
});
})(window.angular);