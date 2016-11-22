"use strict";

app.controller("ItemListCtrl", function($scope, $routeParams, ItemFactory){
	$scope.items = [];
	let getItems = function(){
		ItemFactory.getItemList().then( (fbItems)=>{
			$scope.items = fbItems;
		});
	};
	getItems();
  	$scope.deleteItem = function(itemId){
  		console.log("delete", itemId);
  		ItemFactory.deleteItem(itemId).then( (response)=>{
  			getItems();
  		});
  	};
  	$scope.inputChange = function(item){
  		ItemFactory.editItem(item).then( (response)=>{
  			console.log("checkbox item", item);
		});
  	};
});