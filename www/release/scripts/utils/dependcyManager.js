/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define([],function(){function resolver(dependencies){function loader($q,$rootScope){var defer=$q.defer();return require(dependencies,function(){defer.resolve(),$rootScope.$apply()}),defer.promise}return loader.$inject=["$q","$rootScope"],loader}return{resolve:function(controllerUrl){return resolver([controllerUrl])}}});