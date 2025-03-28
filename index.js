function SI_Calculate() {
	let Principal = document.getElementById("SI_P").value;
	let Rate = document.getElementById("SI_R").value;
	let Time = document.getElementById("SI_T").value;

	let SI = Principal * Rate * Time / 100;
	let Amount = parseInt(Principal) + parseInt(SI);

    Amount = Amount.toFixed(2);
    SI = SI.toFixed(2);

	document.getElementById("SI_Val").innerHTML = "&#8377;" + SI;
	document.getElementById("Amount_SI_Val").innerHTML = "&#8377;" + Amount;

	if (Time == "") {
		document.getElementById("SI_Val").innerHTML = "&#8377;0";
		document.getElementById("Amount_SI_Val").innerHTML = "&#8377;0";
	}
}

function Sub_Annually() {
	let P = document.getElementById("CI_P").value;
	let R = document.getElementById("CI_R").value;
	let Y = document.getElementById("CI_T").value;
	let M = document.getElementById("CI_M").value;

	if (M > 12) {
		document.getElementById("An_CI_Val").innerHTML = "Invalid";
	    document.getElementById("Amount_An_Val").innerHTML = "Invalid";
	} else if (M < 0) {
		document.getElementById("An_CI_Val").innerHTML = "Invalid";
	    document.getElementById("Amount_An_Val").innerHTML = "Invalid";
	} else {
		M /= 12;
		let n = parseInt(Y) + (parseFloat(M));
		Annually(P, R, n);
	}
}

function Sub_Semi_Annually() {
	let P = document.getElementById("CI_sa_p").value;
	let R = document.getElementById("CI_sa_r").value;
	let Y = document.getElementById("CI_sa_Y").value;
	let M = document.getElementById("CI_sa_M").value;

	if (M > 12) {
		document.getElementById("CI_sa_Val").innerHTML = "Invalid";
	    document.getElementById("Amount_sa_Val").innerHTML = "Invalid";
	} else if (M < 0) {
		document.getElementById("CI_sa_Val").innerHTML = "Invalid";
	    document.getElementById("Amount_sa_Val").innerHTML = "Invalid";
	} else {
		M /= 12;
		let n = parseInt(Y) + (parseInt(M));
		Semi_Annually(P, R, n);
	}
}

function Sub_Quarterly() {
	let P = document.getElementById("CI_q_p").value;
	let R = document.getElementById("CI_q_r").value;
	let Y = document.getElementById("CI_q_Y").value;
	let M = document.getElementById("CI_q_M").value;

	if (M > 12) {
		document.getElementById("CI_q_Val").innerHTML = "Invalid";
	    document.getElementById("Amount_q_Val").innerHTML = "Invalid";
	} else if (M < 0) {
		document.getElementById("CI_q_Val").innerHTML = "Invalid";
	    document.getElementById("Amount_q_Val").innerHTML = "Invalid";
	} else {
		M /= 12;
		let n = parseInt(Y) + (parseInt(M));
		Quarterly(P, R, n);
	}
}

function Annually(Principal, Rate, Time) {
	let Amount = Principal * (1 + Rate / 100) ** Time;
	let CI = parseInt(Amount) - parseInt(Principal);

	Amount = Amount.toFixed(2);
	CI = CI.toFixed(2);

	document.getElementById("An_CI_Val").innerHTML = "&#8377;" + CI;
	document.getElementById("Amount_An_Val").innerHTML = "&#8377;" + Amount;
}

function Semi_Annually(Principal, Rate, Time) {
	let Amount = Principal * (1 + Rate / 200) ** (2 * Time);
	let CI = parseInt(Amount) - parseInt(Principal);

	Amount = Amount.toFixed(2);
	CI = CI.toFixed(2);

	document.getElementById("CI_sa_Val").innerHTML = "&#8377;" + CI;
	document.getElementById("Amount_sa_Val").innerHTML = "&#8377;" + Amount;
}

function Quarterly(Principal, Rate, Time) {
	let Amount = Principal * (1 + Rate / 400) ** (4 * Time);
	let CI = parseInt(Amount) - parseInt(Principal);

	Amount = Amount.toFixed(2);
	CI = CI.toFixed(2);

	document.getElementById("CI_q_Val").innerHTML = "&#8377;" + CI;
	document.getElementById("Amount_q_Val").innerHTML = "&#8377;" + Amount;
}

function changeA() {
	let Rate = document.getElementById("CI_R").value;
	let Changed = 72 / parseFloat(Rate);
	Changed = Changed.toFixed(2);

	document.getElementById("dbl1").innerHTML = Changed;

	if (Rate == "") {
		document.getElementById("dbl1").innerHTML = "0";
	}

	if (Rate == 0) {
		document.getElementById("dbl1").innerHTML = "0";
	}
}

function changeB() {
	let Rate = document.getElementById("CI_sa_r").value;
	let Changed = 72 / parseFloat(Rate);
	Changed = Changed.toFixed(2);

	document.getElementById("dbl2").innerHTML = Changed;

	if (Rate == "") {
		document.getElementById("dbl2").innerHTML = "0";
	}

	if (Rate == 0) {
		document.getElementById("dbl2").innerHTML = "0";
	}
}

function changeC() {
	let Rate = document.getElementById("CI_q_r").value;
	let Changed = 72 / parseFloat(Rate);
	Changed = Changed.toFixed(2);

	document.getElementById("dbl3").innerHTML = Changed;

	if (Rate == "") {
		document.getElementById("dbl3").innerHTML = "0";
	}

	if (Rate == 0) {
		document.getElementById("dbl3").innerHTML = "0";
	}
}