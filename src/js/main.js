angular.module('app', [

  // 第三方模块
  'ngRoute', 

  // 自己的组件
  'course',
  'category',
  'aside', 
  'header', 
  'index', 
  'login',
  'profile',
  'repass',

  // 自己的业务逻辑服务
  'http',
  'api',
  
  // 自己的公共配置服务
  'web_api'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
          template: '<ngl-aside></ngl-aside><ngl-index></ngl-index>'
      })
      .when('/index', {
          redirectTo: '/'
      })
      .when('/login', {
          template: '<ngl-login></ngl-login>'
      })
      .when('/profile', {
        template: '<ngl-aside/><ngl-profile/>'
      })
      .when('/repass', {
        template: '<ngl-aside/><ngl-repass/>'
      })
      .when('/category/add', {
        template: '<ngl-aside/><ngl-cg-add/>'
      })
      .when('/category/edit', {
        template: '<ngl-aside/><ngl-cg-edit/>'
      })
      .when('/category/list', {
        template: '<ngl-aside/><ngl-cg-list/>'
      })
      .when('/course/add', {
        template: '<ngl-aside/><ngl-cs-add/>'
      })
      .when('/course/edit1', {
        template: '<ngl-aside/><ngl-cs-edit1/>'
      })
      .when('/course/edit2', {
        template: '<ngl-aside/><ngl-cs-edit2/>'
      })
      .when('/course/edit3', {
        template: '<ngl-aside/><ngl-cs-edit3/>'
      })
      .when('/course/list', {
        template: '<ngl-aside/><ngl-cs-list/>'
      })
      .otherwise({
        templateUrl: '/src/html/404.html'
      })
  }])