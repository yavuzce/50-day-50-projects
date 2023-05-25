const paneller = document.querySelectorAll(".panel");

for (let i of paneller) {
  i.addEventListener("click", () => {
    for (let k of paneller) {
      k.classList.remove("active");
    }
    i.classList.add("active");
  });
}
