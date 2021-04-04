// calc.js

const hottubBtn = document.getElementById('hottub-btn');
const poolBtn = document.getElementById('pool-btn');
const saturationIndexBtn = document.getElementById('saturation-index-btn');

const openHottubMenu = () => {
	document.getElementById('hottub-form').style.display = 'block';
	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('saturation-form').style.display = 'none';
	document.getElementById('results').style.display = 'none';


	//if(hottubBtn.classList.contains('hottub-btn')) {
	//	hottubBtn.classList.add('hottub-btn-active');
	//	hottubBtn.classList.remove('hottub-btn');
	//	poolBtn.classList.remove('pool-btn-active');
	//	saturationIndexBtn.classList.remove('saturation-index-btn-active');
	//} else if (hottubBtn.classList.contains('hottub-btn-active')) {
	//	hottubBtn.classList.add('hottub-btn');
	//	hottubBtn.classList.remove('hottub-btn-active');
	//	poolBtn.classList.add('pool-btn');
	//	saturationIndexBtn.classList.add('saturation-index-btn');
	//}
}

const openPoolMenu = () => {
	document.getElementById('pool-form').style.display = 'block';
	document.getElementById('hottub-form').style.display = 'none';
	document.getElementById('saturation-form').style.display = 'none';
	document.getElementById('results').style.display = 'none';



	//if(poolBtn.classList.contains('pool-btn')) {
	//	poolBtn.classList.add('pool-btn-active');
	//	poolBtn.classList.remove('pool-btn');
	//	hottubBtn.classList.remove('hottub-btn-active');
	//	saturationIndexBtn.classList.remove('saturation-index-btn-active');
	//} else if (poolBtn.classList.contains('pool-btn-active')) {
	//	poolBtn.classList.add('pool-btn');
	//	poolBtn.classList.remove('pool-btn-active');
	//	hottubBtn.classList.add('hottub-btn');
	//	saturationIndexBtn.classList.add('saturation-index-btn');
	//}
}

const openSaturationIndexMenu = () => {
	document.getElementById('saturation-form').style.display = 'block';
	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('hottub-form').style.display = 'none';
	document.getElementById('results').style.display = 'none';


	//if(saturationIndexBtn.classList.contains('saturation-index-btn')) {
	//	saturationIndexBtn.classList.add('saturation-index-btn-active');
	//	saturationIndexBtn.classList.remove('saturation-index-btn');
	//	hottubBtn.classList.remove('hottub-btn-active');
	//	poolBtn.classList.remove('pool-btn-active');
	//} else if (saturationIndexBtn.classList.contains('saturation-index-btn-active')) {
	//	saturationIndexBtn.classList.add('saturation-index-btn');
	//	saturationIndexBtn.classList.remove('saturation-index-btn-active');
	//	hottubBtn.classList.add('hottub-btn');
	//	poolBtn.classList.add('pool-btn');
	//}
}

const resetValues = (formType, inputField) => {
	if(formType == 'hottub') {
		document.getElementById('hottub-alk').value = ' ';
		document.getElementById('hottub-hard').value = ' ';
	} else if(formType == 'pool') {
		document.getElementById('pool-alk').value = ' ';
		document.getElementById('pool-hard').value = ' ';
	} else if(formType == 'balance') {
		if(inputField == 'ph') {
			document.getElementById('sat-ph').value = ' ';
		} else if(inputField == 'temp') {
			document.getElementById('sat-temp').value = ' ';
		} else if(inputField == 'hardness') {
			document.getElementById('sat-hard').value = ' ';
		} else if(inputField == 'alkalinity') {
			document.getElementById('sat-alk').value = ' ';
		} else if(inputField == 'tds') {
			document.getElementById('sat-tds').value = ' ';
		}
	}
	
}

let testHottub = () => {
	event.preventDefault();

	let hottubAlk = Number(document.getElementById('hottub-alk').value);
	let hottubHard = Number(document.getElementById('hottub-hard').value);
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

	if(hottubAlk < 100) {
		let hottubCalcAlk = 1.4 * 0.5 * (desiredHottubAlk / 10);
		hottubAlkTest = 'add <strong><span style="color:#F4B349;">' + Math.round(100*hottubCalcAlk)/100 + '</span></strong> pounds of Sodium Bicarbonate';
	} else {
		hottubAlkTest = '<em>Hot-Tub alkalinity greater than 100ppm</em><br>do <strong><span style="color:#F4B349;">NOT</span></strong> add Sodium Bicarbonate';
	}

	if(hottubHard < 200) {
		let hottubCalcHard = 0.9 * 0.5 * (desiredHottubHard / 10);
		hottubHardTest = 'add <strong><span style="color:#F4B349;">' + Math.round(100*hottubCalcHard)/100 + '</span></strong> pounds of Calcium Chloride';
	} else {
		hottubHardTest = '<em>Hot-Tub hardness greater than 200ppm</em><br>do <strong><span style="color:#F4B349;">NOT</span></strong> add Calcium Chloride';
	}

	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('hottub-form').style.display = 'none';
	document.getElementById('saturation-form').style.display = 'none';

	let results = document.getElementById('results');
	results.style.display = 'block';
	results.innerHTML = '<h4 class="bold-text">Alkalinity: ' + hottubAlk + '</h4><p class="reg-text">' + hottubAlkTest + '</p><br><h4 class="bold-text">Hardness: ' + hottubHard + '</h4><p class="reg-text">' + hottubHardTest + '</p>';
}

let testPool = () => {
	event.preventDefault();

	let poolAlk = Number(document.getElementById('pool-alk').value);
	let poolHard = Number(document.getElementById('pool-hard').value);
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
		poolAlkTest = 'add <strong><span style="color:#F4B349;">' + Math.round(100*poolCalcAlk)/100 + '<span></strong> pounds of Sodium Bicarbonate';
	} else {
		poolAlkTest = '<em>Pool alkalinity greater than 100ppm</em><br>do <strong><span style="color:#F4B349;">NOT</span></strong> add Sodium Bicarbonate';
	}

	if(poolHard < 300) {
		let poolCalcHard = 0.9 * 8.8 * (desiredPoolHard / 10);
		poolHardTest = 'add <strong><span style="color:#F4B349;">' + Math.round(100*poolCalcHard)/100 + '<span></strong> pounds of Calcium Chloride';
	} else {
		poolHardTest = '<em>Pool hardness greater than 300ppm</em><br>do <strong><span style="color:#F4B349;">NOT</span></strong> add Calcium Chloride';
	}

	document.getElementById('pool-form').style.display = 'none';
	document.getElementById('hottub-form').style.display = 'none';
	document.getElementById('saturation-form').style.display = 'none';

	let results = document.getElementById('results');
	results.style.display = 'block';
	results.innerHTML = '<h4 class="bold-text" >Alkalinity: ' + poolAlk + '</h4><p class="reg-text">' + poolAlkTest + '<p><br><h4 class="bold-text">Hardness: ' + poolHard + '</h4><p class="reg-text">' + poolHardTest + '</p>';
}

let testBalance = () => {
	event.preventDefault();

	let satPh = Number(document.getElementById('sat-ph').value);
	let satTemp = Number(document.getElementById('sat-temp').value);
	let satHard = Number(document.getElementById('sat-hard').value);
	let satAlk = Number(document.getElementById('sat-alk').value);
	let satTDS = Number(document.getElementById('sat-tds').value);

	let satTempTf = undefined;
	let satHardCf = undefined;
	let satAlkAf = undefined;
	let satTDSf = undefined;

	let errorInput = false;

	// make sure PH value is in reason
	if(satPh > 12 || satPh < 0) {
		resetValues('balance', 'ph');
		alert('PH value above 12 or below zero entered. This must be incorrect. Value cleared');
		errorInput = true;
	}

	// figure out Temperature Factor
	if(satTemp > 0 && satTemp <= 32) {
		satTempTf = 0.0;
	} else if(satTemp > 32 && satTemp <= 37) {
		satTempTf = 0.1;
	} else if(satTemp > 37 && satTemp <= 46) {
		satTempTf = 0.2;
	} else if(satTemp > 46 && satTemp <= 53) {
		satTempTf = 0.3;
	} else if(satTemp > 53 && satTemp <= 60) {
		satTempTf = 0.4;
	} else if(satTemp > 60 && satTemp <= 66) {
		satTempTf = 0.5;
	} else if(satTemp > 66 && satTemp < 76) {
		satTempTf = 0.6;
	} else if(satTemp > 76 && satTemp <= 84) {
		satTempTf = 0.7;
	} else if(satTemp > 84 && satTemp <= 94) {
		satTempTf = 0.8;
	} else if(satTemp > 94 && satTemp <= 130) {
		satTempTf = 0.9;
	} else {
		resetValues('balance', 'temp');
		alert('Invalid temperature entered, value cleared');
		errorInput = true;
	}

	// figure out Calcium Factor
	if(satHard > 0 && satHard <= 25) {
		satHardCf = 1.0;
	} else if(satHard > 25 && satHard <= 50) {
		satHardCf = 1.3;
	} else if(satHard > 50 && satHard <= 75) {
		satHardCf = 1.5;
	} else if(satHard > 75 && satHard <= 100) {
		satHardCf = 1.6;
	} else if(satHard > 100 && satHard <= 125) {
		satHardCf = 1.7;
	} else if(satHard > 125 && satHard <= 150) {
		satHardCf = 1.8;
	} else if(satHard > 150 && satHard <= 200) {
		satHardCf = 1.9;
	} else if(satHard >= 200 && satHard <= 250) {
		satHardCf = 2.0;
	} else if(satHard > 250 && satHard <= 300) {
		satHardCf = 2.1;
	} else if(satHard > 300 && satHard <= 400) {
		satHardCf = 2.2;
	} else if(satHard > 400 && satHard <= 820) {
		satHardCf = 2.5;
	} else {
		resetValues('balance', 'hardness');
		alert('Incorrect Calcium hardness value entered, value cleared');
		errorInput = true;
	}
	
	// figure out Alkalinity Factor
	if(satAlk > 0 && satAlk <= 25) {
		satAlkAf = 1.4;
	} else if(satAlk > 25 && satAlk <= 50) {
		satAlkAf = 1.7;
	} else if(satAlk > 50 && satAlk <= 75) {
		satAlkAf = 1.9;
	} else if(satAlk > 75 && satAlk <= 100) {
		satAlkAf = 2.0;
	} else if(satAlk > 100 && satAlk <= 125) {
		satAlkAf = 2.1;
	} else if(satAlk > 125 && satAlk <= 150) {
		satAlkAf = 2.2;
	} else if(satAlk > 150 && satAlk <= 200) {
		satAlkAf = 2.3;
	} else if(satAlk > 200 && satAlk <= 250) {
		satAlkAf = 2.4;
	} else if(satAlk > 250 && satAlk <= 300) {
		satAlkAf = 2.5;
	} else if(satAlk > 300 && satAlk <= 400) {
		satAlkAf = 2.6;
	} else if(satAlk > 400 && satAlk <= 820) {
		satAlkAf = 2.9;
	} else {
		resetValues('balance', 'alkalinity');
		alert('Incorrect Carbonate alkalinity value entered, value cleared');
		errorInput = true;
	}

	// figure out TDS
	if(satTDS < 1000) {
		satTDSf = 12.1;
	} else {
		satTDSf = 12.2;
	}

	let saturationIndex = Math.round(10*(satPh + satTempTf + satHardCf + satAlkAf - satTDSf))/10;
	let scaleOrCorrode = undefined;

	if(saturationIndex <= -0.4) {
		scaleOrCorrode = '<span style="color: #B74F1C;font-family:\'Frijole\', sans,serif;font-size: 2.8em;">Corrosive</span>';
	} else if(saturationIndex >= 0.4) {
		scaleOrCorrode = '<span style="color: #7a7f2d;font-family:\'Frijole\', sans,serif;font-size: 2.8em;">Scaling</span>';
	} else {
		scaleOrCorrode = '<span style="color: #1c7dd8;font-family:\'Faster One\', sans,serif;font-size: 2.8em;">Balanced</span>';
	}

	if(errorInput == false) {
		document.getElementById('pool-form').style.display = 'none';
		document.getElementById('hottub-form').style.display = 'none';
		document.getElementById('saturation-form').style.display = 'none';

		let results = document.getElementById('results');
		results.style.display = 'block';
		results.innerHTML = '<h4 class="bold-text" style="text-align:center;">Saturation Index: <strong><span style="color:#F4B349;">' + saturationIndex + '</span></strong><br>' + scaleOrCorrode + '</h4>';
	} else {
		document.getElementById('pool-form').style.display = 'none';
		document.getElementById('hottub-form').style.display = 'none';
		document.getElementById('saturation-form').style.display = 'none';

		let results = document.getElementById('results');
		results.style.display = 'block';
		results.innerHTML = '<h4 class="bold-text" style="text-align:center;">Invalid Input<br>Try Again</h4>';
	}

	

}
