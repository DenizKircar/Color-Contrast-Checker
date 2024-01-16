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
  function myFunction3() {
    var copyText = document.querySelector("#gradient-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.querySelector("#myTooltip3");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
function outFunc3() {
    var tooltip = document.querySelector("#myTooltip3");
    tooltip.innerHTML = "Copy to clipboard";
}
