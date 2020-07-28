let indice = 1;
muestraSlider(indice);

function avanzaSlider(n){
    muestraSlider(indice += n);
    
}

setInterval(function tiempo(){
    muestraSlider(indice+=1);
}, 60000);

function muestraSlider(n){
    let i;
    let slider = document.querySelectorAll(".miSlider");
    
    if(n > slider.length){
        indice = 1;
    }

    if(n < 1){ 
        indice = slider.length;
    }

    for(i = 0; i < slider.length; i++){
        slider[i].style.display = 'none';
        
    }
    
    slider[indice-1].style.display = 'block'; 
}

