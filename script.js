const color_picker = document.querySelector("#color-pick");
var color = document.querySelector("#color-output");
const color_picker_scn = document.querySelector("#color-pick2");
var color_scn = document.querySelector("#color-output2");


color_picker.addEventListener("input", () => {
    color.value = color_picker.value;
    document.querySelector(".texto-contrasto").style.color = color_picker.value;


    updateContrast("display", color_picker_scn, color_picker);
    updateContrast("gradient", grad_picker, color_picker);
})
color.addEventListener("input", () => {
    updateColor(color_picker, color); 
    document.querySelector(".texto-contrasto").style.color = color_picker.value;

    updateContrast("display", color_picker_scn, color_picker);
    updateContrast("gradient", grad_picker, color_picker);
})
function updateColor(cpick, c) {
    let valid = isTrueArray(c.value.split("").slice(1, 7).map((char) => (/[a-fA-F]/).test(char) || !isNaN(char)));
    if(c.value.length == 7 && c.value[0] == "#" && valid) {
        cpick.value = c.value;
    }
}
function isTrueArray(array) {
    let trueCount = 0;
    for(let i of array) {
        if(i == true) {
            trueCount += 1;
        }
    }
    return trueCount == array.length;
}


color_picker_scn.addEventListener("input", () => {
    if(document.querySelector("#gradient-maker:checked") !== null) {
        color_scn.value = color_picker_scn.value;
        document.querySelector(".texto-contrasto").style.background = `linear-gradient(to bottom, ${color_picker_scn.value}, ${grad_picker.value})`;
    } else {
        color_scn.value = color_picker_scn.value;
        document.querySelector(".texto-contrasto").style.background = `${color_picker_scn.value}`;
    }

    updateContrast("display", color_picker_scn, color_picker);
    updateContrast("gradient", grad_picker, color_picker);
})
color_scn.addEventListener("input", () => {
    if(document.querySelector("#gradient-maker:checked") !== null) {
        updateColor(color_picker_scn, color_scn);
        document.querySelector(".texto-contrasto").style.background = `linear-gradient(to bottom, ${color_picker_scn.value}, ${grad_picker.value})`;
    } else {
        updateColor(color_picker_scn, color_scn);
        document.querySelector(".texto-contrasto").style.background = color_picker_scn.value;
    }

    updateContrast("display", color_picker_scn, color_picker);
    updateContrast("gradient", grad_picker, color_picker);
})


updateColor(color_picker, color);
document.querySelector(".texto-contrasto").style.color = color_picker.value;
updateColor(color_picker_scn, color_scn); 
document.querySelector(".texto-contrasto").style.background = color_picker_scn.value;
