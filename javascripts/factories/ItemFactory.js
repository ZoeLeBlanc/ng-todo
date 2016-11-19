"use strict";
app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
	var getItemList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
			 .success( (response)=>{
			 	let items = [];
			 	Object.keys(response).forEach((key)=>{
			 		response[key].id = key;
			 		items.push(response[key]);
			 	});
			 	resolve(items);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};
	var postNewItem = function(newItem){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify({
				assignedTo: newItem.assignedTo,
				isCompleted: newItem.isCompleted,
				task: newItem.task
				})
			)
			 .success( (postResponse)=>{
			 	resolve(postResponse);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};
	var deleteItem = function(itemId){
		return $q((resolve, reject)=>{
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
			 .success( (deleteReponse)=>{
			 	resolve(deleteReponse);
			 })
			 .error( (deleteError)=>{
			 	reject(deleteError);
			 });
		});
	};
	return {getItemList:getItemList, postNewItem:postNewItem, deleteItem:deleteItem};
});

