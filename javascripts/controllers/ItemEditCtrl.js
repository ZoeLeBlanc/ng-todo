"use strict";
app.controller("ItemEditCtrl", function($scope, $routeParams, $location, ItemFactory){
	let itemId = $routeParams.id;
	console.log($routeParams);
	$scope.newTask={};
	ItemFactory.getSingleItem(itemId).then( (oneItem)=>{
		oneItem.id = itemId;
		console.log("itemIdView", itemId);
		console.log("oneItemView", oneItem);
		$scope.newTask = oneItem;
	});
	$scope.addNewItem = function(){
		ItemFactory.editItem($scope.newTask).then( (response)=>{
			$scope.newTask= {};
			$location.url("/items/list");
		});
	};
});