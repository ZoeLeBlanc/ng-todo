"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Item"}];
});
app.controller("TodoCtrl", function($scope){
	$scope.welcome = "hey there";
	$scope.title = "Welcome to your task list Zoe";
	$scope.showListView = true;
	$scope.newItem = function() {
		console.log("one item");
		$scope.showListView = false;
	}
	$scope.allItems = function(){
		console.log("all items");
		$scope.showListView = true;
	}
	$scope.items = [
    { 
    	id: 0,
    	task: "Buy soy sauce", 
    	isCompleted: true,
    	assignedTo: "Zoe" 
    },
    { 
    	id: 1,
    	task: "Walk the dogs", 
    	isCompleted: true,
    	assignedTo: "Zoe" 
    },
    { 
    	id: 2,
    	task: "Mow the lawn", 
    	isCompleted: false,
    	assignedTo: "Dan" 
    },
    { 
    	id: 3,
    	task: "Fold laundry", 
    	isCompleted: false,
    	assignedTo: "Zoe" 
    },
  	];
  	
});