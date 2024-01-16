let grad_dir = 0;
let direction = `bottom`;


document.querySelector("#swap").addEventListener("click", () => {
    if(document.querySelector("#gradient-maker:checked") !== null) {
        let bg_color = color_picker_scn.value;
        let text_color = color.value;

        color.value = bg_color;
        color_picker.value = bg_color;
        document.querySelector(".texto-contrasto").style.color = `${color_picker.value}`
        

        color_scn.value = text_color;
        color_picker_scn.value = text_color;
        document.querySelector(".texto-contrasto").style.background = `linear-gradient(to ${direction}, ${color_picker_scn.value}, ${grad_picker.value})`;
    }

    else {
        let bg_color = color_picker_scn.value;
        let text_color = color.value;

        color.value = bg_color;
        color_picker.value = bg_color;
        document.querySelector(".texto-contrasto").style.color = `${color_picker.value}`
        

        color_scn.value = text_color;
        color_picker_scn.value = text_color;
        document.querySelector(".texto-contrasto").style.background = `${color_picker_scn.value}`
    }
    
})



document.querySelector("#swap_grad").addEventListener("click", () => {
    if(grad_dir == 0) {
        direction = `top`;
        document.querySelector(".texto-contrasto").style.background = `linear-gradient(to ${direction}, ${color_picker_scn.value}, ${grad_picker.value})`;
        grad_dir = 1;
    } else if(grad_dir == 1) {
        direction = `bottom`;
        document.querySelector(".texto-contrasto").style.background = `linear-gradient(to ${direction}, ${color_picker_scn.value}, ${grad_picker.value})`;
        grad_dir = 0;
    }
});
