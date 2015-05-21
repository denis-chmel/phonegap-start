/*! Compiled on: Thu Aug 28 2014 14:37:43 */
var fileVersion = "v0.8.1-22-ce0da21"; 
"use strict";var error=angular.module("error",[]);error.factory("$error",["$rootScope","$timeout",function($rootScope,$timeout){var timeoutPromise,self=this;self.alert=function(type,message){self.open({error:{type:type,message:message}})},self.warning=function(type,message){self.open({notificationType:"appWarning",error:{type:type,message:message}}),self.clear()};var startTimer=function(){$timeout.cancel(timeoutPromise),$timeout(function(){$rootScope.messageBounce=!0},50),timeoutPromise=$timeout(function(){self.closeMessage()},5e3)};return self.open=function(params){var reset={messageBounce:!1,error:!1,success:!1,notificationType:null};$rootScope.messageBounce=!1;angular.extend(reset,params);$timeout(function(){angular.extend($rootScope,angular.extend(reset,params)),startTimer()},200)},self.success=function(type,message){self.open({notificationType:"appSuccess",error:{type:type,message:message}})},self.clear=function(){$rootScope.messageBounce=!1,$rootScope.error=!1,$rootScope.success=!1,$rootScope.notificationType=null},self.closeMessage=function(){$rootScope.messageBounce=!1,$timeout(function(){self.clear()},500)},$rootScope.$on("$stateChangeSuccess",function(){self.clear()}),self}]),error.directive("appError",["$rootScope","$error",function($rootScope,$error){return{restrict:"E",replace:!0,template:'<div class="appError {{ fix }} {{ notificationType }}" ng-class="{ bounce: messageBounce }"><div class="appError-inner">{{ error.message }} <i ng-click="closeMessage()">x</i></div></div>',link:function($scope){if($scope.closeMessage=$error.closeMessage,Modernizr.touch){var $fixedElements=$(".appError");$(document).on("focus",":input",function(){$fixedElements.addClass("ios-fix-position-fixed")}).on("blur",":input",function(){$fixedElements.removeClass("ios-fix-position-fixed"),setTimeout(function(){window.scrollTo(document.body.scrollLeft,document.body.scrollTop)},0)})}}}}]);