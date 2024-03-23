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
    }, 5000);
}

autoSlide();

const sliders = document.querySelectorAll('.item-sliderbox');

sliders.forEach(function(slider) {
    const scrollbar = slider.querySelector('.sliderbox');
    
    scrollbar.addEventListener("wheel", (e) => {
        e.preventDefault();
        scrollbar.scrollLeft += e.deltaY;
    });
});

const backtotop = document.querySelector('.back-to-top');

backtotop.addEventListener('click',(e)=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})