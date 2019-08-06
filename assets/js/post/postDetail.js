(function(angular) {
  'use strict';
function PostDetailController($scope, $element, $attrs, $http) {
  var ctrl = this;
  ctrl.update = function(prop, value) {
    console.log(prop, value);
    ctrl.onUpdate({post: ctrl.post, prop: prop, value: value});
  };
  ctrl.clickPost = function(item) {
    ctrl.postClicked = item;
    ctrl.onClick(item);
  };

  ctrl.getUser = function(idUser){
    return ctrl.users.filter(({id}) => id == idUser)[0].username;
  };
}
angular.module('postApp').component('postDetail', {
  templateUrl: 'assets/templates/postDetail.html',
  controller: PostDetailController,
  bindings: {
    post: '=',
    users: '=',
    onClick: '&',
    onDeletecomment: '&',
    onUpdatecomment: '&'
  }
});
})(window.angular);