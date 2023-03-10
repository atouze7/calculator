const input = document.querySelector("input");
const allBtns = document.querySelectorAll("button");
const operations = document.querySelector(".operations");
const num = document.querySelector(".num");
const arrBtns = Array.from(allBtns);
const equalBtn = document.querySelector(".equals");
const reload = document.querySelector(".reload");

arrBtns.forEach(function (btns) {
  btns.addEventListener("click", function (e) {
    if (
      btns.classList.contains("operations") ||
      btns.classList.contains("num")
    ) {
      input.value += btns.innerHTML;
    }

    const equals = function () {
      equalBtn.addEventListener("click", function () {
        const first = String(input.value);
        const second = eval(first);
        input.value = second;
        console.log(second);
      });
    };
    equals();

    reload.addEventListener("click", function () {
      location.reload();
    });
    /*const mutationObserve = new MutationObserver(() => {
      console.log("hi");
    });
    mutationObserve.observe(e.target, { attributeFilter: ["class"] });*/
  });
});
