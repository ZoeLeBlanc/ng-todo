"use strict";
app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
	//Firebase: get all Items
	var getItemList = function(userId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
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
	//Firebase: send a new item to Firebase
	var postNewItem = function(newItem){
		return $q((resolve, reject)=>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify({
				assignedTo: newItem.assignedTo,
				isCompleted: newItem.isCompleted,
				task: newItem.task,
				uid: newItem.uid
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
	var getSingleItem = function(itemId){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
			 .success( (getSingleReponse)=>{
			 	resolve(getSingleReponse);
			 })
			 .error( (getSingleError)=>{
			 	reject(getSingleError);
			 });
		});
	};
	var editItem = function(editItem){
		return $q((resolve, reject)=>{
			$http.put(`${FIREBASE_CONFIG.databaseURL}/items/${editItem.id}.json`, 
				JSON.stringify({
					assignedTo: editItem.assignedTo,
					isCompleted: editItem.isCompleted,
					task: editItem.task,
					uid: editItem.uid
				})
			)
			 .success( (editResponse)=>{
			 	resolve(editResponse);
			 })
			 .error( (errorResponse)=>{
			 	reject(errorResponse);
			 });
		});
	};
	return {getItemList:getItemList, postNewItem:postNewItem, deleteItem:deleteItem, getSingleItem:getSingleItem, editItem: editItem};
});

