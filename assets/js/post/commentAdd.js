(function(angular) {
  'use strict';
function EditableFieldController($scope, $element, $attrs, $http) {
  var ctrl = this;
  ctrl.editMode = false;
  $scope.name = '';
  $scope.body = '';

  ctrl.handleModeChange = function() {
    if (ctrl.editMode) {
      ctrl.onUpdatecomment(ctrl.fieldValue);
      ctrl.fieldValueCopy = ctrl.fieldValue;  
    }else{
      $scope.name =  ctrl.fieldValue.value.name;
      $scope.body =  ctrl.fieldValue.value.body;
    }
    ctrl.editMode = !ctrl.editMode;
  };

  ctrl.$onInit = function() {
    // Make a copy of the initial value to be able to reset it later
    ctrl.fieldValueCopy = ctrl.fieldValue;

    // Set a default fieldType
    if (!ctrl.fieldType) {
      ctrl.fieldType = 'text';
    }
  };

  ctrl.reset = function() {
    ctrl.fieldValue.value.name =  $scope.name;
    ctrl.fieldValue.value.body =  $scope.body;
    ctrl.editMode = !ctrl.editMode;
  }; 

  ctrl.onDelete = function(){
    ctrl.onDeletecomment(ctrl.fieldValue.value);
  }
  ctrl.onSave = function(){
    ctrl.onSavecomment(ctrl.newValuecomment.value);
  }
}

angular.module('postApp').component('editableField', {
  templateUrl: 'assets/templates/editItem.html',
  controller: EditableFieldController,
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdatecomment: '&',
    onDeletecomment: '&',
  }
});
angular.module('postApp').component('newComment', {
  templateUrl: 'assets/templates/addComment.html',
  controller: EditableFieldController,
  bindings: {
    newValuecomment: '<', 
    fieldType: '@?',
    onSavecomment: '&'
  }
});
})(window.angular);