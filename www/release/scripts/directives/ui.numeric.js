/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define(["modules/app"],function(app){app.directiveManager("numeric",[function(){return{restrict:"A",scope:{model:"=ngModel"},link:function($scope){$scope.$watch("model",function(input,prevInput){"undefined"!=typeof input&&(/^[0-9]+?$/g.test(input)||($scope.model=prevInput))})}}}])});