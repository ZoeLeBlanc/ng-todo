"use strict";

app.controller("ItemListCtrl", function($scope, $rootScope, $routeParams, ItemFactory){
	$scope.items = [];
	let getItems = function(){
		ItemFactory.getItemList($rootScope.user.uid).then( (fbItems)=>{
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