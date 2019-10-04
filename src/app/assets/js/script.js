const loader = document.querySelector('.loader');
const page = document.querySelector('.page');

function init() {
	// setTimeout(() => {
	// 	loader.style.opacity = 0;
	// 	loader.style.display = 'none';

	// 	setTimeout(() => (page.style.opacity = 1), 50);
	// }, 3500);
	setTimeout(() => (page.style.opacity = 1), 50);
}

init();


document.getElementById("burger").onclick = open;


function open() {
	document.getElementById("aside").classList.toggle("show");
	document.getElementById("burger").classList.toggle("active-burg");
}
