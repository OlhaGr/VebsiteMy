let num = 0;
while (num) {
	num++;
	console.log(num);
};

let num2 = 5;
while (num2) {
	console.log(num2);
	num2--;
};

function showConsole() {
	console.log("Click!!");
}
button.onclick = showConsole;
button.addEventListener("click", showConsole);

button.addEventListener('mouseenter', showConsole);


