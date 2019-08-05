(function(angular) {
  'use strict';
function PostDetailController($scope, $element, $attrs, $http) {
  var ctrl = this;
  ctrl.update = function(prop, value) {
    ctrl.onUpdate({post: ctrl.post, prop: prop, value: value});
  };
  ctrl.clickPost = function(item) {
    ctrl.postClicked = item;
    ctrl.onClick(item);
  };
}
angular.module('postApp').component('postDetail', {
  templateUrl: 'assets/templates/postDetail.html',
  controller: PostDetailController,
  bindings: {
    post: '=',
    onClick: '&',
    onDelete: '&',
    onUpdate: '&'
  }
});
})(window.angular);