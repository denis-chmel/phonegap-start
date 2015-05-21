/*! Compiled on: Tue Sep 09 2014 13:14:28 */
var fileVersion = "v0.9-7-49107f2-dirty"; 
"use strict";define(["angular","utils/dependcyManager","localConfig","cookies","angularRoute","angularAnimate","angularSanitize","angularResource","cachedResource","angularUIRouter","angularTouch","modal","facebook","beacon","error","loading"],function(angular,dependcyManager){var localConfig=angular.injector(["localConfig"]).get("config"),defaultConfig={version:"undefined"!=typeof fileVersion?fileVersion:(new Date).getTime(),devMode:!1,cache:!0,urlDebugMode:!1,mixpanelPretend:!0,dietsMaxNumber:1,goalsMaxNumber:3,maxMinPrice:30,maxMinOrder:21,facebookAppId:"1436535709919546",api:"https://api.gobask.com/v1"},appConfig=angular.extend({},defaultConfig,localConfig),app=angular.module("app",["localConfig","ngResource","ngRoute","ui.router","cookies","ngSanitize","ngAnimate","ngTouch","ui.modal","beacon","error","ngCachedResource","facebook","loading"],function($compileProvider,$controllerProvider,$provide,$filterProvider){app.decoratorManager=$provide.decorator,app.factoryManager=$provide.factory,app.filterManager=$filterProvider.register,app.directiveManager=$compileProvider.directive,app.compileManager=$compileProvider,app.controllerManager=$controllerProvider.register,app.constantManager=$provide.constant,app.controllerManager("app",["$rootScope","config","$scope","$state","$location","$injector","$beacon","$loading","usersFactory","$modal","$error","$cookies","$timeout",function($rootScope,config,$scope,$state,$location,$injector,$beacon,$loading,usersFactory,$modal,$error,$cookies,$timeout){$rootScope.config=config,$rootScope.email=$location.search().email,$rootScope.loginMessage=($location.search().message||"").replace(/\+/g," "),$rootScope.successMessage=$location.search().success,$location.search().goals&&$cookies.set("pgoals",$location.search().goals),$rootScope.preselectedGoals=($cookies.get("pgoals")||"").split(",").slice(0,config.goalsMaxNumber).map(function(val){return parseInt(val)}),$location.search().diet&&$cookies.set("pdiet",$location.search().diet),$rootScope.preselectedDiet=parseInt($cookies.get("pdiet")||0),$rootScope.data={bgClass:"bg5"};var isAboutPage="/whats-bask"==$location.$$path,isFramePage=$location.$$path.match(/^\/frame/),isPasswordReset=$location.search().code;$rootScope.$on("$stateChangeStart",function(event,toState){if("frame"!=toState.data.class){var isInFrame=window.self!==window.top;if(isInFrame)return void(window.parent.location=toState.url)}var isLogged=$cookies.get("access_token")&&$cookies.get("refresh_token")&&$cookies.get("token_expiry");if("primary.home"!=toState.name||$location.search().error)isLogged||toState.data.guestMode||($beacon.trigger("authentication.change",!0),event.preventDefault(),$rootScope.user&&($rootScope.email=$rootScope.user.email),$state.transitionTo("primary.home").then(function(){$error.success(null,"Your last session has expired, please sign in again to continue.")}));else{var goToDishes=function(){event.preventDefault(),$state.transitionTo("primary.dishes")};isLogged?goToDishes():usersFactory.getCurrentUserFromAPI().then(function(user){user&&goToDishes()})}});var isRootPage="/"==$location.$$url||$location.$$url.match(/^\/\?/);isRootPage||isFramePage||isAboutPage||isPasswordReset||usersFactory.getCurrentUserFromAPI().then({},function(){$rootScope.afterSignInUrl=$location.$$url;var dishName=($location.search().search||"").replace(/\+/g," ");return $location.search().id&&!$rootScope.loginMessage&&$modal.open({templateUrl:"/release/html/modals/confirm.html",windowClass:"welcomeModal",controller:function($scope,$modalInstance){var dishNameReference=dishName?"<em>"+dishName+"</em>":"the dish";$scope.header="Welcome to Bask!",$scope.body="Please login or sign up to order "+dishNameReference+" now.",$scope.close=function(){$modalInstance.close()}}}),$location.url("/?error=sign-in-first")}),isPasswordReset&&$modal.open({templateUrl:"/release/html/modals/account/resetPassword.html",windowClass:"forgot-details",resolve:{controller:dependcyManager.resolve("controllers/resetPasswordCtrl")},controller:"resetPasswordCtrl"}),$rootScope.scrollToTop=function(withAnimation){$("body, html").stop().animate({scrollTop:0},withAnimation?800:0)},$rootScope.isMobileMode=function(){return window.innerWidth<=640},config.devMode&&$(document).on("keydown",function(evt){192===evt.which&&($scope.$apply(function(){$rootScope.config.show_debug=!$rootScope.config.show_debug}),$timeout(function(){$("#debug-info").focus()}))}),$rootScope.delay=function(){var timers={"default":0};return function(callback,ms,context){context=context||"default",clearTimeout(timers[context]),timers[context]=setTimeout(callback,ms)}}(),$rootScope.$on("$stateChangeSuccess",function(event,current){if($rootScope.loaded=!0,$rootScope.uiState=current.data.class.split(" ")[0],$rootScope.uiPageClass=current.data.class,$rootScope.cartEnabled=current.data.noCart===!1,$rootScope.openFilters=!1,$rootScope.scrollToTop(),$rootScope.successMessage){var text;switch($rootScope.successMessage){case"NEVER_SUBSCRIBED":case"ALREADY_UNSUBSCRIBED":case"SUCCESSFULLY_UNSUBSCRIBED":text="You have been unsubscribed."}text&&($error.success("success",text),$rootScope.successMessage=null)}ga("send","pageview",$location.url());var path=$location.path();return"/"===path.charAt(path.length-1)?path.substr(0,path.length-1):void 0}),require(["authenticationFactory"],function(){var authenticationFactory=$injector.get("authenticationFactory");$beacon.on("authentication.logout",function(){$cookies.remove("pdiet"),$cookies.remove("pgoals")}),$beacon.on("authentication.logged",function(){isPasswordReset||($rootScope.email=null,$rootScope.loginMessage=null,$location.search().email&&$location.search("email",null),$location.search().message&&$location.search("message",null))});var resetSessionVars=function(){$rootScope.session={lastSelectedSection:null}};resetSessionVars(),$beacon.on("authentication.change",function(){resetSessionVars(),authenticationFactory.me().then(function(user){if($rootScope.user=user,$beacon.trigger("user.loggedin",[user]),$rootScope.afterSignInUrl){var url=$rootScope.afterSignInUrl;$rootScope.afterSignInUrl=null,$location.url(url)}$state.transitionTo(0==user.goals.length&&0==user.ratings.length?"primary.goals":"primary.dishes"),$rootScope.$on("$stateChangeSuccess",function(event,toState,toParams,fromState){"primary.home"==fromState.name&&($loading.end(),$modal.closeAll())})},function(){$rootScope.user=null})}),authenticationFactory.me().then(function(user){$rootScope.user=user}),$rootScope.signIn=function(email,password){var params={email:email||this.email,password:password||this.password};return params.email?params.password?authenticationFactory.signIn(params):void $error.alert("email","Please enter your password."):void $error.alert("email","Please enter a valid email address.")},$scope.signout=function(){authenticationFactory.signout(),$state.transitionTo("primary.home")}})}])}).constant("config",appConfig);return app.config(["$httpProvider","$facebookProvider",function($httpProvider,$facebookProvider){$facebookProvider.init({appId:appConfig.facebookAppId,channelUrl:"/channel.html"});var authHttpInterceptor=["$q","$injector","$cookies",function($q,$injector,$cookies){var refreshAccessToken=function(){var deferred=$q.defer();return require(["authenticationFactory"],function(){var authenticationFactory=$injector.get("authenticationFactory");authenticationFactory.refreshAccessToken().then(function(){deferred.resolve()},function(){deferred.reject()})}),deferred.promise};return{request:function(config){return"GET"==config.method?config.url+=(config.url.indexOf("?")>-1?"&":"?")+"v="+appConfig.version:mixpanel&&mixpanel.get_property&&config.data&&(config.data.distinctId=mixpanel.get_property("distinct_id")),appConfig.urlDebugMode&&console.info(config.method+" request:",config),config.authentication===!0&&$cookies.has("token_expiry")&&$cookies.has("refresh_token")&&$cookies.has("access_token")?Math.round((new Date).getTime()/1e3)>$cookies.get("token_expiry")?refreshAccessToken().then(function(){return config.headers.Authorization=$cookies.get("access_token"),config}):(config.headers.Authorization=$cookies.get("access_token"),config):config.authentication===!0?$cookies.has("access_token")?config||$q.when(config):$q.reject("Access token is missing"):config||$q.when(config)}}}];if($httpProvider.interceptors.push(authHttpInterceptor),appConfig.devMode){var neverCacheInterceptor=["$q",function(){return{request:function(config){return requirejs.s.contexts._.config.baseUrl="/src/scripts/",config.url=config.url.replace(/release\/html/,"src/html"),config},response:function(response){return response}}}];$httpProvider.interceptors.push(neverCacheInterceptor)}}]),Array.prototype.shuffle=function(){for(var result=angular.copy(this),i=result.length-1;i>1;i--){var j=Math.floor(Math.random()*i),swap=result[i];result[i]=result[j],result[j]=swap}return result},app});