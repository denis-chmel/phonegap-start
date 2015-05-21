/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define(["modules/app","tooltipster"],function(app){app.directiveManager("tooltip",function($timeout){return{restrict:"A",link:function($scope,element){$timeout(function(){element.tooltipster({theme:"tooltipster-shadow",maxWidth:250})})}}})});