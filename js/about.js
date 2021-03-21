const checkbox = document.querySelector('input[name=theme]');
const header = document.querySelector("header")
const main = document.querySelector("main")
checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        transition()
        header.setAttribute('data-theme', 'dark')
        main.setAttribute('data-theme', 'dark')
    } else {
        transition()
        header.setAttribute('data-theme', 'light')
        main.setAttribute('data-theme', 'light')
    }
})

let transition = () => {
    header.classList.add('transition');
    window.setTimeout(() => {
        header.classList.remove('transition')
    }, 1000)
}

const menu_btn = document.querySelector('.fa-bars');
const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', () => {
		mobile_menu.classList.toggle('is-active');
	});