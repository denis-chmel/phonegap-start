/*! Compiled on: Thu May 21 2015 08:13:23 */
var fileVersion = "v1.0-4-f842d9e-dirty"; 
"use strict";define(["modules/app"],function(app){app.filterManager("numberSuffix",function(){return function(i){var str=i.toString().slice(-1),ord="";switch(str){case"1":ord="st";break;case"2":ord="nd";break;case"3":ord="rd";break;case"4":case"5":case"6":case"7":case"8":case"9":case"0":ord="th"}return i+ord}})});