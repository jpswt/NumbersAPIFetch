let factBtn = document.getElementById('get-fact');
let randomFactBtn = document.getElementById('random-fact');
let fact = document.querySelector('.fact');

let fetchFactApi = async (num) => {
	let url = `http://numbersapi.com/${num}`;
	await fetch(url)
		.then((res) => res.text())
		.then((data) => {
			console.log(data);
			fact.innerHTML = `<h4>${data}</h4>`;
			document.querySelector('.result-container').append(fact);
		});
};

let getFact = () => {
	let num = document.getElementById('number').value;

	if (num) {
		if (num >= 0 && num <= 200) {
			fetchFactApi(num);
		} else {
			fact.innerHTML = `<p class='msg'>Please enter a number between 0 to 200.</p>`;
		}
	} else {
		fact.innerHTML = `<p class='msg'>The input field cannot be empty</p>`;
	}
};

factBtn.addEventListener('click', getFact);
