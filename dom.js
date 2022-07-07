
const btnMenu = document.querySelector("#btnMenu");
const navResponsive = document.querySelector("#navResponsive");
btnMenu.addEventListener("click", function(){
	navResponsive.classList.toggle('mostrar')
})


const btnClose = document.querySelector("#btnClose");
btnClose.addEventListener("click", function(){
	if (navResponsive.classList.contains("mostrar")) {
		navResponsive.classList.remove("mostrar")
	} else {
		navResponsive.classList.add("ocultar")
	}
})

        //    btn arrows                subMenu                 

// const btnArrow = document.querySelectorAll(".arrows-nav");


// for(let i=0; i < btnArrow.length; i++){
// 	btnArrow[i].addEventListener("click", function(){
        
// 		if (window.innerWidth < 1024) {
// 			const subMenu = this.nextElementSibling;
// 			const height = btnArrow.scrollHeight;

// 			if (subMenu.classList.contains("desplegar")) {
// 				subMenu.classList.remove("desplegar")
// 			} else {
// 				subMenu.classList.toggle("desplegar");
// 			}
		

// 	 }	
// 	})
// }



const buttonList = document.querySelectorAll("#listButton");


for(let i=0; i < buttonList.length; i++){
	buttonList[i].addEventListener('click', function(){

		const subMenu = this.nextElementSibling;

		if (subMenu.classList.contains("desplegar")){
			subMenu.classList.remove('desplegar')
		} else {
			subMenu.classList.toggle('desplegar')
		} 
	})
}



