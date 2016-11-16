"use strict";


app.controller("TodoCtrl", function($scope, ItemFactory){
	$scope.newTask = {};
	$scope.welcome = "hey there";
	$scope.title = "Welcome to your task list Zoe";
	$scope.showListView = true;
	$scope.items = [];
	ItemFactory.getItemList().then(function(fbItems){
		$scope.items = fbItems;
	});
	$scope.newItem = function() {
		console.log("one item");
		$scope.showListView = false;
	};
	$scope.allItems = function(){
		console.log("all items");
		$scope.showListView = true;
	};
	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		$scope.newTask.id = $scope.items.length;
		console.log("newTask in function, ", $scope.newTask);
		$scope.items.push($scope.newTask);
		$scope.newTask = {};
		$scope.showListView = true;
	};
  	
});