/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define(["modules/app","usersFactory"],function(app){app.controllerManager("accountAddAddressCtrl",function($scope,$rootScope,usersFactory,$modalInstance,success,address,isFirst,$location,$error){$scope.state=null,$scope.message="",$scope.address="",$scope.isNew=!0,$scope.isFirst=isFirst,$scope.dishName=($location.search().search||"").replace(/\+/g," "),$scope.submitted=!1,address&&($scope.name=address.name,$scope.address=address.address,$scope.address2=address.address2,$scope.phone=address.phone,$scope.city=address.city,$scope.state=address.state,$scope.zip=address.zip,$scope.note=address.note,$scope.isNew=!1),$scope.submit=function(){if($scope.submitted=!0,!this.addAddress.$invalid){var number=this.phone.toString().match(/\d/g);if(null==number||10!=number.length)return void $error.alert(null,"Please enter a valid phone number.");var params={name:this.name,address:this.address,address2:this.address2,phone:this.phone,city:this.city,state:this.state,zip:this.zip,note:this.note};address?(params.address_id=address.id,usersFactory.updateAddress(params).then(function(response){success&&success(response),$modalInstance.close()},function(error){$error.alert(null,error)})):usersFactory.addAddress(params).then(function(response){success&&success(response),$modalInstance.close()},function(error){$error.alert(null,error)})}}})});