const size_slider = document.querySelector("#font-size");
const weight_slider = document.querySelector("#font-weight");
const big_font = document.querySelector("#text-fr");

weight_slider.max = 9;
weight_slider.min = 1;

size_slider.max = 72;
size_slider.min = 6;

size_slider.value = 24;
weight_slider.value = 6;


size_slider.addEventListener("input", () => {
    let font_size = size_slider.value;
    
    big_font.style.fontSize = `${font_size}px`;

})

weight_slider.addEventListener("input", () => {
    let font_weight = weight_slider.value;
    
    big_font.style.fontWeight = `${font_weight*100}`;

})
