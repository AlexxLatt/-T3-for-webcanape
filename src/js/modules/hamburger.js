function hamburger(){
	const open = document.querySelector(".header__sidepanel");
	const close = document.querySelector(".hamburgerMenu__wrapper__close");
	const menu  = document.querySelector(".hamburgerMenu");
	open.addEventListener("click", (event)=>{
		menu.classList.add("active")
	})
	close.addEventListener("click", (event)=>{
		menu.classList.remove("active")
	})
}
export default hamburger;