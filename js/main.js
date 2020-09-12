//INICIO Deslizar imagenes
let animado = document.querySelectorAll('.animado');



function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;

    let ancho = screen.width;
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop; //offsetTop= altura de el inicio del elemento al inicio de la pagina

        if (alturaAnimado - 600 < scrollTop) {

            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }

    }


}
window.addEventListener('scroll', mostrarScroll);





//FIN Deslizar imagenes


//INICIO ANIMACION MENU 
window.addEventListener("scroll", function() {
    let header = document.querySelector("#header");
    let img = document.querySelector("img");
    let left = document.querySelectorAll("a");

    header.classList.toggle("sticky", window.scrollY > 0);
    img.classList.toggle("logo-invertido", window.scrollY > 0);
    for (let i = 0; i < left.length; i++) {
        left[i].classList.toggle("underline-invertido", window.scrollY > 0);
    }

});

//FIN ANIMACION MENU 


// INICIO DEL LIGHT BOX
const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imagesContainer = document.querySelector('.img-show');
const menu = document.querySelector('#header');
const lightBox = document.querySelector('#lightBox');


images.forEach(image => {
    image.addEventListener('click', () => {

        addImage(image.getAttribute('src'), image.getAttribute('alt'));

    });
});


const addImage = (srcImage, altImage) => {

    containerImage.classList.toggle('move');
    imagesContainer.classList.toggle('show');
    imagesContainer.src = srcImage;
}




window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    containerImage.addEventListener('click', () => {
        containerImage.classList.toggle('move');
        imagesContainer.classList.toggle('show');


    });


    if (scrollTop == 0) {
        console.log('entro a la condicion');
        imagesContainer.classList.remove('show');
        containerImage.classList.remove('move');
    }

});




//FIN DEL LIGHT BOX