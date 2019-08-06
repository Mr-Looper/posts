(function(angular) {
  'use strict';
function PostListController($scope, $element, $attrs, $http) {
  var ctrl = this;
  $scope.hidden = true;
  $scope.isNewPost = false;
  $scope.isNewComment = false;
  ctrl.editMode = false;
  ctrl.newPost = {
    body : '',
    title : ''
  };
  ctrl.newComment = {
    body : '',
    name : '',
    email : '',
    postId : ''
  };
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
  $http({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    responseType: "json"
  }).then(function(data) {
    ctrl.listUsers = data.data;
  });
  ctrl.handleModeChange = function() {
    if (ctrl.editMode) {
      ctrl.onUpdatecomment(ctrl.fieldValue);
      ctrl.fieldValueCopy = ctrl.fieldValue;
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
    ctrl.fieldValue = ctrl.fieldValueCopy;
    ctrl.editMode = !ctrl.editMode;
  }; 

  ctrl.addPost = function(){
    $scope.hidden = true;
    $scope.isNewPost = !$scope.isNewPost;
    $scope.isNewComment = false;
    ctrl.postClicked = '';
    ctrl.listComment = '';  
  }

  ctrl.addComment = function(){
    $scope.isNewComment = !$scope.isNewComment;
  }
  ctrl.savePost = function(post){
    $http({
      url: "https://jsonplaceholder.typicode.com/posts/",
      method: "POST",
      body: JSON.stringify({
        body: post.body,
        title: post.title,
        userId : 1
      }),
      headers: {
        "Content-type": "application/json"
      },
      responseType: "json"
    }).then(function(data) {
      ctrl.postClicked = {
        id : data.data.id,
        title : post.title,
        body: post.body,
        userId : post.userId
      };
      ctrl.list.push(ctrl.postClicked)
      $scope.hidden = false;
      $scope.isNewPost = false;
      // ctrl.listComment = data.data;
    });
  }
  ctrl.saveComment = function(comment){
    $http({
      url: "https://jsonplaceholder.typicode.com/comments/",
      method: "POST",
      body: JSON.stringify({
        body: comment.body,
        name: comment.name,
        userId : comment.userId,
        postId : ctrl.postClicked.id
      }),
      headers: {
        "Content-type": "application/json"
      },
      responseType: "json"
    }).then(function(data) {
      ctrl.listComment.push({
        id : data.data.id,
        name : comment.name,
        body: comment.body,
        email : comment.email,
        postId : ctrl.postClicked.id
      })
      $scope.isNewComment = false;
      // ctrl.listComment = data.data;
    });
  }

  ctrl.updatePost = function(post, prop, value) {
    $http({
      url: "https://jsonplaceholder.typicode.com/posts/" + post.id,
      method: "PATCH",
      body: JSON.stringify({
        body: post.body,
        title: post.title
      }),
      headers: {
        "Content-type": "application/json"
      },
      responseType: "json"
    }).then(function(data) {
      console.log(data);
      post[prop] = value;
      // ctrl.listComment = data.data;
    });
    
  };

  ctrl.deletePost = function(post) {
    $http({
        url: "https://jsonplaceholder.typicode.com/posts/" + post.id,
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        responseType: "json"
      }).then(function(data) {
        ctrl.postClicked = '';
        ctrl.listComment = '';
        var idx = ctrl.list.indexOf(post);
        if (idx >= 0) {
          ctrl.list.splice(idx, 1);
        }
      });
  };
  ctrl.updateComment = function(post) {
    $http({
      url: "https://jsonplaceholder.typicode.com/comments/" + post.id,
      method: "PATCH",
      body: JSON.stringify({
        body: post.body,
        name: post.name
      }),
      headers: {
        "Content-type": "application/json"
      },
      responseType: "json"
    }).then(function(data) {
      console.log(data);
    });
  };
  ctrl.deleteComment = function(post) {
    $http({
        url: "https://jsonplaceholder.typicode.com/comments/" + post.id,
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        },
        responseType: "json"
      }).then(function(data) {
        console.log(data);
        var idx = ctrl.listComment.indexOf(post);
        if (idx >= 0) {
          ctrl.listComment.splice(idx, 1);
        }
      });
  };

  ctrl.showBody = function(post, comments){
    ctrl.postClicked = post;
    $scope.hidden = false;
    $scope.isNewPost = false;
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