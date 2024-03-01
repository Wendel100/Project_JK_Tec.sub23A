const imgs = document.getElementById('carrosel');
const img = document.querySelectorAll("img");
let idx = 0;
function carrosel(){
    idx++;
if(idx >img.length-1){
idx=0;
}
}
setInterval(carrosel, 1800);