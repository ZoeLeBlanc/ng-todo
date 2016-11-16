"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
	$scope.navItems = [{name:"Logout"},{name:"All Items"},{name:"New Item"}];
});
app.controller("TodoCtrl", function($scope){
	$scope.newTask = {};
	$scope.welcome = "hey there";
	$scope.title = "Welcome to your task list Zoe";
	$scope.showListView = true;
	$scope.newItem = function() {
		console.log("one item");
		$scope.showListView = false;
	};
	$scope.allItems = function(){
		console.log("all items");
		$scope.showListView = true;
	};
	// $scope.addNewItem = function(){
	// 	$scope.items.$add({
	// 		id: 
	// 		task: $scope.newTask.task,
	// 		isCompleted: false,
	// 		assignedTo: $scope.newTask.assignedTo
	// 	});
	// }
	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("newTask in function, ", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = {};
		$scope.showListView = true;
	};
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