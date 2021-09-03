const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider_img");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha() {
    let sliderSectionFrist = document.querySelectorAll(".slider_img")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFrist);
        slider.style.marginLeft = "-100%";

    },500);
}

btnRight.addEventListener('click',function(){
    moverDerecha();
});

setInterval(() => {
    moverDerecha();
}, 4000);