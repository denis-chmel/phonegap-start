/*! Compiled on: Wed Jun 04 2014 17:46:30 */
var fileVersion = "v0.1.6-23-cf68004-dirty"; 
"use strict";define(["modules/app","dietsFactory","usersFactory","checkbox","authenticationFactory","utils/dependcyManager","controllers/accountConfirmationModalCtrl"],function(app){app.controllerManager("accountDislikesCtrl",["$scope","$rootScope","$state","usersFactory","dietsFactory","authenticationFactory","$currentUser","$modal","$loading","$error","$timeout",function($scope,$rootScope){$scope.keywords=[];for(var i in $rootScope.me.dislikeKeywords)$rootScope.me.dislikeKeywords.hasOwnProperty(i)&&$scope.keywords.push({checked:!0,word:$rootScope.me.dislikeKeywords[i]})}])});