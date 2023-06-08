const arkaPlan = document.querySelector(".arkaPlan");
const yuzdeSayaci = document.querySelector(".yuzdeSayaci");
var sayi1 = 100;
myInterval = setInterval(zaman, 40);

function zaman() {
  yuzde.innerHTML = `%${sayi1}`;
  sayi1--;

  if (sayi1 < 0) {
    clearInterval(myInterval);
  }
}
var arkaPlanBlur = 20;
myInterval2 = setInterval(backgroundBlur, 200);

function backgroundBlur() {
  arkaPlan.style.filter = `blur(${arkaPlanBlur}px)`;
  arkaPlanBlur--;
  if (arkaPlanBlur < 0) {
    clearInterval(myInterval2);
  }
}
var yuzdeBlur = 1;

setInterval(yuzdeKaybolma, 410);
function yuzdeKaybolma() {
  yuzdeSayaci.style.filter = `blur(${yuzdeBlur}px)`;
  yuzdeBlur++;
  if (yuzdeBlur > 10) {
    yuzdeSayaci.style.display = "none";
  }
}
