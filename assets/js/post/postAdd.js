(function(angular) {
  'use strict';
function EditablePostController($scope, $element, $attrs, $http) {
  var ctrl = this;
  ctrl.editMode = false;
  $scope.hidden = true;
  $scope.title = '';
  $scope.body = '';
  ctrl.handleModeChange = function() {
    console.log(ctrl.fieldValue);
    if (ctrl.editMode) {
      ctrl.onUpdatepost(ctrl.fieldValue);
    }else{
      $scope.title =  ctrl.fieldValue.value.title;
      $scope.body =  ctrl.fieldValue.value.body;
    }
    ctrl.editMode = !ctrl.editMode;
  };

  ctrl.$onInit = function() {
    $scope.hidden = false;
    // Make a copy of the initial value to be able to reset it later
    ctrl.fieldValueCopy = ctrl.fieldValue;

    // Set a default fieldType
    if (!ctrl.fieldType) {
      ctrl.fieldType = 'text';
    }
  };

  ctrl.reset = function() {
    ctrl.editMode = !ctrl.editMode;
    ctrl.fieldValue.value.title = $scope.title;
    ctrl.fieldValue.value.body = $scope.body;
  }; 

  ctrl.onDelete = function(){
    ctrl.onDeletepost(ctrl.fieldValue.value);
  }
  ctrl.onSave = function(){
    ctrl.onSavepost(ctrl.newValue.value);
  }
}

angular.module('postApp').component('editablePost', {
  templateUrl: 'assets/templates/editPost.html',
  controller: EditablePostController,
  bindings: {
    fieldValue: '<',  
    fieldType: '@?',
    onUpdatepost: '&',
    onDeletepost: '&'
  }
});
angular.module('postApp').component('newPost', {
  templateUrl: 'assets/templates/addPost.html',
  controller: EditablePostController,
  bindings: {
    newValue: '<', 
    fieldType: '@?',
    onSavepost: '&'
  }
});
})(window.angular);