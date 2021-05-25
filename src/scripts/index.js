//* All selectors

const binaryVal = document.getElementById('binaryVal');
const decimalVal = document.getElementById('decimalVal');
const convertBtn = document.querySelector('.convertBtn');
const resetBtn = document.querySelector('.resetBtn');

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
