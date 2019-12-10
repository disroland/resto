'use strict'
window.addEventListener('scroll', function (){
	let header = document.querySelector('.ba-header');
	if (window.pageYOffset >= header.clientHeight) {
		header.classList.add('header-fix')
	} else {
		header.classList.remove('header-fix')

	}
}
)

let lnk = document.querySelector('.ba-menu__item:nth-of-type(3)');
let hero = document.querySelector('.ba-hero');
let menu = document.querySelector('.ba-section-menu');

window.addEventListener('scroll', function(){
	if (window.pageYOffset > ((hero.clientHeight + menu.clientHeight)-window.innerHeight)){
		lnk.style.color = 'red'
	} else {
		lnk.style.color = 'inherit'
	}

}
)