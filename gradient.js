
const grad_picker = document.querySelector("#gradient-pick");
var grad = document.querySelector("#gradient-output");
const grad_btn = document.querySelector("#gradient-maker");

const grad_contrast = document.querySelector("#contrast-displayer .contrast-gradient");

let no_grad = true;
grad_btn.addEventListener("click", () => {
    if(no_grad == true) {
        document.querySelector(".gradient").classList.remove("disable");
        document.querySelector(".grad-container h2").classList.remove("disable");
        document.querySelector(".texto-contrasto").style.background = `linear-gradient(to ${direction}, ${color_picker_scn.value}, ${grad_picker.value})`;

        grad_contrast.style.flex = "50%";
        grad_contrast.style.transform = "scale(1)";
        grad_contrast.style.opacity = 1;
        grad_contrast.style.marginTop = "16px";
        grad_contrast.style.height = "100%";

        no_grad = false;
    } else if(no_grad == false) {
        document.querySelector(".texto-contrasto").style.background = `${color_picker_scn.value}`;
        document.querySelector(".gradient").classList.add("disable");
        document.querySelector(".grad-container h2").classList.add("disable");

        grad_contrast.style.flex = "0";
        grad_contrast.style.transform = "scale(0)";
        grad_contrast.style.opacity = 0;
        grad_contrast.style.marginTop = "0";
        grad_contrast.style.height = "0%";

        no_grad = true;
    }
})


grad_picker.addEventListener("input", () => {
    grad.value = grad_picker.value;
    document.querySelector(".texto-contrasto").style.background = `linear-gradient(to bottom, ${color_picker_scn.value}, ${grad_picker.value})`;

    updateContrast("gradient", grad_picker, color_picker);
})
grad.addEventListener("input", () => {
    updateColor(grad_picker, grad);
    document.querySelector(".texto-contrasto").style.background = `linear-gradient(to bottom, ${color_picker_scn.value}, ${grad_picker.value})`;

    updateContrast("gradient", grad_picker, color_picker);
})


// .contrast-gradient {
    
//     flex: 0;
//     height: 0;
//     opacity: 0;
//     pointer-events: none;
