(function(angular) {
  'use strict';
function PostCommentController($scope, $element, $attrs, $http) {
  var ctrl = this;

  ctrl.deleteComment = function(post) {
    ctrl.onDeletecomment(post);
  };

  ctrl.updateComment = function(post) {
    ctrl.onUpdatecomment(post);
  };
}


angular.module('postApp').component('postComment', {
  templateUrl: 'assets/templates/postComment.html',
  controller: PostCommentController,
  bindings: {
    onUpdatecomment: '&',
    onDeletecomment: '&',
    comment : '<'
  }
});
})(window.angular);