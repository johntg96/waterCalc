// calc.js

//alert("working");

const openHottubMenu = () => {
	document.getElementById('hottub-form').style.display = 'block';
	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('results').style.display = 'none';
}

const openPoolMenu = () => {
	document.getElementById('pool-form').style.display = 'block';
	document.getElementById('hottub-form').style.display = 'none';
	document.getElementById('results').style.display = 'none';
}

let testHottub = () => {
	event.preventDefault();

	let hottubAlk = document.getElementById('hottub-alk').value;
	let hottubHard = document.getElementById('hottub-hard').value;
	let desiredHottubAlk = undefined;
	let desiredHottubHard = undefined;
	let hottubAlkTest = undefined;
	let hottubHardTest = undefined;

	if(hottubAlk > 100) {
		desiredHottubAlk = hottubAlk - 100;
	} else {
		desiredHottubAlk = 100 - hottubAlk;
	}

	if(hottubHard > 200) {
		desiredHottubHard = hottubHard - 200;
	} else {
		desiredHottubHard = 200 - hottubHard;
	}

	//if(hottubAlk == 100) {
	//	alert('Hot-Tub at optimum alkalinity, no Sodium Bicarb needed')
	//}

	if(hottubAlk < 100) {
		let hottubCalcAlk = 1.4 * 0.5 * (desiredHottubAlk / 10);
		hottubAlkTest = 'add <strong>' + Math.round(100*hottubCalcAlk)/100 + '</strong> pounds of Sodium Bicarbonate';
	} else {
		hottubAlkTest = '<em>Hot-Tub alkalinity greater than 100ppm</em><br>do <strong>NOT</strong> add Sodium Bicarbonate';
	}

	if(hottubHard < 200) {
		let hottubCalcHard = 0.9 * 0.5 * (desiredHottubHard / 10);
		hottubHardTest = 'add <strong>' + Math.round(100*hottubCalcHard)/100 + '</strong> pounds of Calcium Chloride';
	} else {
		hottubHardTest = '<em>Hot-Tub hardness greater than 200ppm</em><br>do <strong>NOT</strong> add Calcium Chloride';
	}

	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('hottub-form').style.display = 'none';

	let results = document.getElementById('results');
	results.style.display = 'block';
	results.innerHTML = '<h4 class="bold-text">Alkalinity: ' + hottubAlk + '</h4><p class="reg-text">' + hottubAlkTest + '<p><br><h4 class="bold-text">Hardness: ' + hottubHard + '</h4><p class="reg-text">' + hottubHardTest + '</p>';
}

let testPool = () => {
	event.preventDefault();

	let poolAlk = document.getElementById('pool-alk').value;
	let poolHard = document.getElementById('pool-hard').value;
	let desiredPoolAlk = undefined;
	let desiredPoolHard = undefined;
	let poolAlkTest = undefined;
	let poolHardTest = undefined;

	if(poolAlk > 100) {
		desiredPoolAlk = poolAlk - 100;
	} else {
		desiredPoolAlk = 100 - poolAlk;
	}

	if(poolHard > 300) {
		desiredPoolHard = poolHard - 300;
	} else {
		desiredPoolHard = 300 - poolHard;
	}

	if(poolAlk < 100) {
		let poolCalcAlk = 1.4 * 8.8 * (desiredPoolAlk / 10);
		poolAlkTest = 'add <strong>' + Math.round(100*poolCalcAlk)/100 + '</strong> pounds of Sodium Bicarbonate';
	} else {
		poolAlkTest = '<em>Pool alkalinity greater than 100ppm</em><br>do <strong>NOT</strong> add Sodium Bicarbonate';
	}

	if(poolHard < 300) {
		let poolCalcHard = 0.9 * 8.8 * (desiredPoolHard / 10);
		poolHardTest = 'add <strong>' + Math.round(100*poolCalcHard)/100 + '</strong> pounds of Calcium Chloride';
	} else {
		poolHardTest = '<em>Pool hardness greater than 300ppm</em><br>do <strong>NOT</strong> add Calcium Chloride';
	}

	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('hottub-form').style.display = 'none';

	let results = document.getElementById('results');
	results.style.display = 'block';
	results.innerHTML = '<h4 class="bold-text">Alkalinity: ' + poolAlk + '</h4><p class="reg-text">' + poolAlkTest + '<p><br><h4 class="bold-text">Hardness: ' + poolHard + '</h4><p class="reg-text">' + poolHardTest + '</p>';
}
