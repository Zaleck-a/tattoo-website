

//INICIO Deslizar imagenes
let animado = document.querySelectorAll('.animado');
function mostrarScroll(){   
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < animado.length; i++ ){
        let alturaAnimado = animado[i].offsetTop; //offsetTop= altura de el inicio del elemento al inicio de la pagina

        if(alturaAnimado - 500 < scrollTop){

            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
        
    }
    
    
}
window.addEventListener('scroll', mostrarScroll);



//FIN Deslizar imagenes


//INICIO ANIMACION MENU 
window.addEventListener("scroll", function(){
    let header = document.querySelector("#header");
    let img = document.querySelector("img");
    let left = document.querySelectorAll("a");

    header.classList.toggle("sticky", window.scrollY > 0);
    img.classList.toggle("logo-invertido", window.scrollY > 0);
    for(let i = 0; i < left.length; i++ ){
        left[i].classList.toggle("underline-invertido", window.scrollY > 0);
    }
    
});

//FIN ANIMACION MENU 
