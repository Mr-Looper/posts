<!DOCTYPE html>
<html lang="es">
  <head>


    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Posts</title>
    <!-- <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
    <link type="text/css" rel="stylesheet" href="http://localhost/posts/assets/css/fonts.googleapis.css" media="screen"/>
    <link type="text/css" rel="stylesheet" href="http://localhost/posts/assets/css/style.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css">



    <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-aria.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-messages.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.min.js"></script>
  <!-- Angular Material Library -->
  <script src="http://localhost/posts/assets/js/lib/ui-bootstrap-1.3.1.min.js"></script>


    <script type="text/javascript" src="http://localhost/posts/assets/js/app.js"></script>
    <script type="text/javascript" src="http://localhost/posts/assets/js/post/postList.js"></script>
    <script type="text/javascript" src="http://localhost/posts/assets/js/post/postDetail.js"></script>
    <script type="text/javascript" src="http://localhost/posts/assets/js/post/postAdd.js"></script>
    <script type="text/javascript" src="http://localhost/posts/assets/js/post/postComment.js"></script>
    <!-- <script type="text/javascript" src="http://localhost/posts/assets/js/directives/directives.js"></script> -->
    <!-- <script type="text/javascript" src="http://localhost/posts/assets/js/controllers/main.js"></script> -->
    <!-- <script type="text/javascript" src="http://localhost/posts/assets/js/filters/filters.js"></script> -->
    <!--[if lt IE 9]>
      <script src="assets/js/html5shiv.js"></script>
      <script src="assets/js/respond.min.js"></script>
    <![endif]-->
  </head>
 
  <body ng-app="postApp">
    <post-list></post-list>
  </body>

<!--   <script type="">
    var app = angular.module('postApp').run(function($rootScope) {
        $rootScope.base_url = "http://localhost/posts/";
    })
  </script> -->
  <!--   <div id="header" ng-controller="headerController">
      <md-nav-bar md-selected-nav-item="currentNavItem">
        <md-nav-item  ng-repeat="item in menu" md-nav-href="#{{item.ID_MENU}}" name="{{item.ID_MENU}}">{{item.NOMBRE}}</md-nav-item>
      </md-nav-bar>
    </div>
    <div id="body" ng-controller="mainController" ng-view>
    </div>
    <div id="footer"></div>
    <div class="row" id="modalPrincipal" style="margin-bottom: 0">
      <div id="modal" class="modal" style="margin: auto"></div>

    </div>
    <div style="position: fixed; bottom: 10px; right: 10px; font-weight: bold; z-index: 999999"><span style="font-size: 11px; ">v<?php echo (isset($userdata["version"]) ? $userdata["version"] : "") ?></span></div> -->
</html>