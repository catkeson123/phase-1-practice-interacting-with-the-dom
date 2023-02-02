const counter = document.querySelector("#counter");

document.addEventListener("DOMContentLoaded", function () {
  const plus = document.querySelector("#plus");

  plus.addEventListener("click", function () {
    counter.textContent=parseInt(counter.textContent)+1
  });

  const minus = document.querySelector("#minus");

  minus.addEventListener("click", function () {
    counter.textContent=parseInt(counter.textContent)-1
  });
});
