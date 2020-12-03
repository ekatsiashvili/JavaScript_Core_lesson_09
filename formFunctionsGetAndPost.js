'use strict'

function sendDataByGetMethod() {
	var userData = {
			userName : document.getElementById('userName').value,
			userSurname : document.getElementById('userSurname').value,
			userAge : document.getElementById('userAge').value,
			userAddress : document.getElementById('userAddress').value
	};
	
	for (var value in userData)
		userData[value] += '.ValidatedByGET';
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?userName=" + userData.userName
			+ "&userSurname=" + userData.userSurname + "&userAge="
			+ userData.userAge + "&userAddress=" + userData.userAddress);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();	
}


function sendDataByPostMethod() {
	var userData = {
			userName : document.getElementById('userName').value,
			userSurname : document.getElementById('userSurname').value,
			userAge : document.getElementById('userAge').value,
			userAddress : document.getElementById('userAddress').value
	};
	
	for (var value in userData)
		userData[value] += '.ValidatedByPOST';
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/userPost");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(userData));	
}


userAge.onblur = function() {
	if( this.value<1 || this.value>100 || isNaN(this.value)) {
		this.value = "Error!!! Enter the age of 1 to 100";
		userAge.focus();
	}
}