/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define(["modules/app","IDBStore"],function(app,IDBStore){app.factory("$storage",["$q",function($q){var $storageEngine=function(object){this.idbSupported="indexedDB"in window,this.idbSupported&&(this.dbObject=object)};return $storageEngine.prototype={constructor:$storageEngine,call:function(callback){return this.idbSupported?(this.dbObject.onStoreReady=callback,this._dataStore=new IDBStore(this.dbObject)):void 0},remove:function(keyValue){this.idbSupported&&this.call(function(){this.remove(keyValue)})},put:function(object){this.idbSupported&&this.call(function(){this.put(object)})},putBatch:function(object){this.idbSupported&&this.call(function(){this.putBatch(object)})},findOne:function(index,value){var deferred=$q.defer();return this.idbSupported||deferred.reject(),this.call(function(){this.iterate(function(item){deferred.resolve(item)},{index:index,keyRange:this.makeKeyRange({lower:value,upper:value}),onEnd:function(){deferred.reject()}})}),deferred.promise}},$storageEngine}])});