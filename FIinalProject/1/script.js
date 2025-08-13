/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
function compute() {
	p = Number(document.querySelector('#principal').value);
	if (p <= 0) {
		alert('Enter a positive number');
		document.querySelector('#principal').focus();
		return;
	}

	rate = Number(document.querySelector('#rate').value);
	years = Number(document.querySelector('#years').value);
	interest = p * years * rate / 100;
	amount = p + interest;
	const year = new Date().getFullYear() + years;
	document.querySelector('#result').innerHTML
    = `<br>If you deposit $${p.toFixed(2)}<br>
     at an interest rate of ${rate}%<br>
     You will receive an amount of $${amount.toFixed(2)}<br>
     in the year ${year}<br>`;
	// Document.querySelector('#result').textContent = interest;
}

function updateRate() {
	const rateval = document.querySelector('#rate').value;
	document.querySelector('#rate_val').textContent = rateval;
}
