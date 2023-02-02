const counter = document.querySelector("#counter");
const likes = document.querySelector(".likes");

document.addEventListener("DOMContentLoaded", function () {
  const plus = document.querySelector("#plus");

  plus.addEventListener("click", function () {
    counter.textContent=parseInt(counter.textContent)+1
  });

  const minus = document.querySelector("#minus");

  minus.addEventListener("click", function () {
    counter.textContent=parseInt(counter.textContent)-1
  });

  const favorite = document.createElement("li");

  favorite.textContent="liked@"+counter.textContent
  likes.append(favorite)

});

