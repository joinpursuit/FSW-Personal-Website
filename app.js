// navBar effects on scroll
window.addEventListener("scroll", function () {
	const header = this.document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

// active nav link focus
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
	section.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");
		if (top > offset && top < offset + height) {
			navLinks.forEach((link) => {
				link.classList.remove("active");
				document
					.querySelector("header nav a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});
};

// display mobile menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector("nav");

const mobileMenu = () => {
	menu.classList.toggle("is-active");
	menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// scroll button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", () => {
	scrollBtn.classList.toggle("active", window.scrollY > 500);
});

// scroll button function for back to top
scrollBtn.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

// read more button
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".about-para-text");

readMoreBtn.addEventListener("click", (e) => {
	text.classList.toggle("show-more");
	readMoreBtn.innerText === "READ MORE"
		? (readMoreBtn.innerText = "READ LESS")
		: (readMoreBtn.innerText = "READ MORE");
});
