/*! Compiled on: Tue Dec 30 2014 20:27:11 */
var fileVersion = "v0.16.1-7-2687120-dirty"; 
"use strict";define(["modules/app"],function(app){app.factory("inspectletFactory",["config",function(){var self=this;return self.push=function(action){var inspectlet=window.__insp;return inspectlet?void inspectlet.push(action):void console.warn("inspectlet is undefined :(")},self}])});