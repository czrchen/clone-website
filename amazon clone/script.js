const images = document.querySelectorAll('.image-slider ul img');
const previous = document.querySelector('.previous-button');
const next = document.querySelector('.next-button');

let n = 0;

function Slide(){
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[n].style.display = 'block';
}

Slide();

previous.addEventListener('click',(e)=>{
    if(n > 0 ){
        n --;
    }else{
        n = images.length - 1;
    }
    Slide();
})

next.addEventListener('click',(e)=>{
    if(n < images.length - 1 ){
        n ++ ;
    }else{
        n = 0;
    }
    Slide();
})

function autoSlide() {
    setInterval(() => {
        if (n < images.length - 1) {
            n++;
        } else {
            n = 0;
        }
        Slide();
    }, 3000);
}

autoSlide();