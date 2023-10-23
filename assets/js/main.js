const scrollUp = document.querySelector("#scroll-up");
const burger = document.getElementById("burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelectorAll(".nav-link");

scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

burger.addEventListener("click", () =>  {
	ul.classList.toggle("show");
});

nav.forEach((link)=>
	link.addEventListener("click", () => {
		ul.classList.remove("show");
	})
);