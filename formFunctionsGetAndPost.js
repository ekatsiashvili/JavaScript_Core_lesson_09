getAge.onblur = function() {
	if ((this.value < 0) || (this.value > 100) || (isNaN(this.value))) {
		getAge.classList.add('errors');
		getAge.focus();
		getAge.value = 'Ошибка';
		ageLabel.classList.remove('invisible');
		ageLabel.classList.add('visible');
	} else {
		getAge.classList.remove('errors');
		getAddress.focus();
		ageLabel.classList.remove('visible');
		ageLabel.classList.add('invisible');
	}
}

function sendDataByGetMethod() {
	let userData = {
		lName : document.getElementById('getLastName').value,
		fName : document.getElementById('getFirstName').value,
		age : document.getElementById('getAge').value,
		address : document.getElementById('getAddress').value
	};

	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/userGet?lName=" + userData.lName + "&fName="
			+ userData.fName + "&age=" + userData.age + "&address="
			+ userData.address);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send();
}

function sendDataByPostMethod() {
	let userData = {
		lName : document.getElementById('getLastName').value,
		fName : document.getElementById('getFirstName').value,
		age : document.getElementById('getAge').value,
		address : document.getElementById('getAddress').value
	};

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/userPost");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(userData));
}