/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define(["modules/app"],function(app){app.factoryManager("cuisinesFactory",["config","$q","$cachedResource",function(config,$q,$cachedResource){var self=this;self.getAll=function(){var deferred=$q.defer();return resource.get({},function(results){deferred.resolve(results)}),deferred.promise};var resource=$cachedResource("cuisines",config.api+"/cuisines",{id:"@id"},{get:{method:"GET",isArray:!0,authentication:!0},update:{method:"PUT",authentication:!0}});return self}])});