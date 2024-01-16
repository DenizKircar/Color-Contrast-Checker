const toggle = document.querySelector("#extra-settings");
const extradiv = document.querySelector(".slide");
const height = document.querySelector(".extras").offsetHeight;

const toggle_font = document.querySelector("#text-fr");
const toggle_grad = document.querySelector("#gradient-maker");


let grad_active;
let fsize;
let fweight;

toggle.addEventListener("click", () => {
    if(document.querySelector(".rotate") == null) {
        document.querySelector("#extra-settings i").classList.add("rotate");
        extradiv.style.transform = `translate(0, -${height}px)`
        extradiv.classList.add("disable");

        // store font size and weight
        fsize = toggle_font.style.fontSize;
        fweight = toggle_font.style.fontWeight;

        // reset font size and weight
        toggle_font.style.fontSize = `24px`;
        toggle_font.style.fontWeight = `600`;

        // reset gradient
        if(document.querySelector("#gradient-maker:checked") !== null) {
            toggle_grad.click();
            grad_active = true;
        }

    } else {
        document.querySelector("#extra-settings i").classList.remove("rotate");
        extradiv.style.transform = `translate(0, 0)`
        extradiv.classList.remove("disable");

        // revert to font size and weight
        toggle_font.style.fontSize = fsize;
        toggle_font.style.fontWeight = fweight;

        // revert to gradient
        if(grad_active == true) {
            toggle_grad.click();
            grad_active = false;
        }
    } 
})
