const color_picker = document.querySelector("#color-pick");
var color = document.querySelector("#color-output");

color_picker.addEventListener("input", () => {
    color.value = color_picker.value;
    document.querySelector(".texto-contrasto").style.color = color_picker.value}
)
color.addEventListener("input", () => {
    updateColor(color_picker, color); 
    document.querySelector(".texto-contrasto").style.color = color_picker.value;
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


const color_picker_scn = document.querySelector("#color-pick2");
var color_scn = document.querySelector("#color-output2");

color_picker_scn.addEventListener("input", () => {
    color_scn.value = color_picker_scn.value;
    document.querySelector(".texto-contrasto").style.backgroundColor = `${color_picker_scn.value}`
})
color_scn.addEventListener("input", () => {
    updateColor(color_picker_scn, color_scn);
    document.querySelector(".texto-contrasto").style.backgroundColor = color_picker_scn.value;
})




function myFunction() {
    var copyText = document.querySelector("#color-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.querySelector("#myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.querySelector("#myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }


  function myFunction2() {
    var copyText = document.querySelector("#color-output2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.querySelector("#myTooltip2");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc2() {
    var tooltip = document.querySelector("#myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
  }

updateColor(color_picker, color);
document.querySelector(".texto-contrasto").style.color = color_picker.value;
updateColor(color_picker_scn, color_scn); 
document.querySelector(".texto-contrasto").style.backgroundColor = color_picker_scn.value;



const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

document.querySelector("#swap").addEventListener("click", () => {
    let bg_color = rgb2hex(document.querySelector(".texto-contrasto").style.backgroundColor);
    let text_color = rgb2hex(document.querySelector(".texto-contrasto").style.color);

    color.value = bg_color;
    color_picker.value = bg_color;
    document.querySelector(".texto-contrasto").style.color = `${color_picker.value}`
    

    color_scn.value = text_color;
    color_picker_scn.value = text_color;
    document.querySelector(".texto-contrasto").style.backgroundColor = `${color_picker_scn.value}`
    
})