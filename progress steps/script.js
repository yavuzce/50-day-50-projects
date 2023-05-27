const btn = document.querySelector(".btnn:nth-child(2)");
const btn2 = document.querySelector(".btnn:nth-child(1)");
const steps = document.querySelectorAll(".steps");

var counter = 1;

if (counter <= steps.length - 1) {
  btn.addEventListener("click", () => {
    steps[counter].classList.add("active");
    steps[counter + 1].style.color = "blue";
    counter += 2;
    if (counter >= steps.length - 1) {
      btn.style.backgroundColor = "white";
      btn.setAttribute("disabled", true);
    }

    if ((counter) => 1) {
      btn2.removeAttribute("disabled");
      btn2.style.backgroundColor = "blue";
    }
  });
}

if (
  btn2.addEventListener("click", () => {
    steps[counter - 1].style.color = "gainsboro";
    steps[counter - 2].classList.remove("active");

    counter -= 2;
  }) &&
  counter > 0
) {
}
