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
	let getItems = function(){
		ItemFactory.getItemList().then( (fbItems)=>{
			$scope.items = fbItems;
		});
	};
	getItems();
	$scope.newItem = function() {
		$scope.showListView = false;
	};
	$scope.allItems = function(){
		$scope.showListView = true;
	};
	$scope.addNewItem = function(){
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then( (itemId)=>{
			getItems();
			$scope.newTask = {};
			$scope.showListView = true;
		});
	};
  	$scope.deleteItem = function(itemId){
  		console.log("delete", itemId);
  		ItemFactory.deleteItem(itemId).then( (response)=>{
  			getItems();
  		});
  	};
});