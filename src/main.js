'use strict';
//* Imports

import { binaryVal, convertBtn, decimalVal, resetBtn, switchThemeBtn } from './modules/selectors';

//* Convert function

convertBtn.addEventListener('click', function () {
	if (binaryVal.value === '') alert('Please Enter a Binary Number!');
	binaryVal.value.split('').map((char) => {
		if (char !== '0' && char !== '1') alert(`${binaryVal.value} is not a valid Binary Number!`);
	});
	const decimal = parseInt(binaryVal.value, 2);
	decimalVal.value = decimal;
});

//* Reset Function

resetBtn.addEventListener('click', function () {
	binaryVal.value = '';
	decimalVal.value = '';
});

//* Switch Theme Function

switchThemeBtn.addEventListener('click', function () {
	const theme = document.getElementsByTagName('link')[6];

	if (theme.getAttribute('href') == 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css') {
		theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css');
	} else {
		theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css');
	}
});
