/*! Compiled on: Mon Dec 08 2014 12:50:22 */
var fileVersion = "v0.15.1-25-8d30491-dirty"; 
define([],function(){function setCompileProvider(value){$compileProvider=value}function register(directive){if(!$compileProvider)throw new Error("$compileProvider is not set!");$compileProvider.directive.apply(null,directive)}var $compileProvider;return{setCompileProvider:setCompileProvider,register:register}});