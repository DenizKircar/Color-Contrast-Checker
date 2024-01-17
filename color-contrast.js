// map hex character values to numbers
function rgbHEX(character) {
    for(let i=0; i<10; i++) {
        if(character == i) {
            return i;
        }
        else if(character == "A") {return 10}
        else if(character == "B") {return 11}
        else if(character == "C") {return 12}
        else if(character == "D") {return 13}
        else if(character == "E") {return 14}
        else if(character == "F") {return 15}
    } 
    
}


function getLum(hex) {
    
    let split = hex.toUpperCase().split("");

    // separates the hex code into its corresponding color components
    let r_hex = [split[1], split[2]];
    let g_hex = [split[3], split[4]];
    let b_hex = [split[5], split[6]];

    // convert the HEX values to individual RGB components
    let r_rgb = `${rgbHEX(r_hex[0])*16 + rgbHEX(r_hex[1])}`;
    let g_rgb = `${rgbHEX(g_hex[0])*16 + rgbHEX(g_hex[1])}`;
    let b_rgb = `${rgbHEX(b_hex[0])*16 + rgbHEX(b_hex[1])}`;

    // convert RGB values to RGB 8 Bit
    let r = r_rgb/255;
    let g = g_rgb/255;
    let b = b_rgb/255;

    // establist variables for converting RGB values to the sRGB domain
    let r_l;
    let g_l;
    let b_l;

    // convert RGB values to sRGB
    if(r <= 0.03928) {r_l = r/12.92} 
    else {r_l = ((r+0.055)/1.055)**2.4}
    if(g <= 0.03928) {g_l = g/12.92}
    else {g_l = ((g+0.055)/1.055)**2.4}
    if(b <= 0.03928) {b_l = b/12.92}
    else {b_l = ((b+0.055)/1.055)**2.4}

    
    // calculate luminosity from sRGB values
    return (0.2126*r_l) + (0.7152*g_l) + (0.0722*b_l);
    
}


function getContrast(hex1, hex2) {
    
    if(getLum(hex1) >= getLum(hex2)) {return ((getLum(hex1) + 0.05)/(getLum(hex2) + 0.05)).toFixed(2);}

    else {return ((getLum(hex2) + 0.05)/(getLum(hex1) + 0.05)).toFixed(2);}
    
}


function updateContrast(which, x, y) {
    let contrastValue = getContrast(x.value, y.value);
    let contrastDisplay = document.querySelector(`#contrast-displayer .contrast-${which}`);
    let stars = document.querySelectorAll(`#contrast-displayer .contrast-${which} .stars i`);
    
    document.querySelector(`#contrast-displayer .contrast-${which} p`).textContent = contrastValue;

    if(contrastValue >= 4.5) {
        contrastDisplay.style.background = "#d2fbd0";
        contrastDisplay.style.color = "#0d5f07";

        if(contrastValue >= 12) {
            for(let i=0; i<5; i++) {
                stars[i].classList = "fa-solid fa-star";
            }
        } else if(contrastValue >= 7) {
            for(let i=0; i<4; i++) {
                stars[i].classList = "fa-solid fa-star";
            } stars[4].classList = "fa-regular fa-star";
        } else {
            for(let i=0; i<3; i++) {stars[i].classList = "fa-solid fa-star";}
            stars[3].classList = "fa-regular fa-star";
            stars[4].classList = "fa-regular fa-star";
        }
            
    } else if (contrastValue >= 3) {

        contrastDisplay.style.background = "#fbf5d0";
        contrastDisplay.style.color = "#5f5207";
            for(let i=0; i<2; i++) {
                stars[i].classList = "fa-solid fa-star";
            }
            for(let i=0; i<3; i++) {
                stars[4-i].classList = "fa-regular fa-star";
            }

    } else if (contrastValue >= 0) {

        contrastDisplay.style.background = "#fbd0da";
        contrastDisplay.style.color = "#5f071c";        
            for(let i=0; i<5; i++) {
                stars[4-i].classList = "fa-regular fa-star";
            } stars[0].classList = "fa-solid fa-star";
    }
}

updateContrast("display", color_picker_scn, color_picker);
updateContrast("gradient", grad_picker, color_picker);
