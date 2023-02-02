const counter = document.querySelector("#counter");
const likes = document.querySelector(".likes");

document.addEventListener("DOMContentLoaded", function () {
  const plus = document.querySelector("#plus");

  plus.addEventListener("click", function () {
    counter.textContent = parseInt(counter.textContent) + 1;
  });

  const minus = document.querySelector("#minus");

  minus.addEventListener("click", function () {
    counter.textContent = parseInt(counter.textContent) - 1;
  });

  const heart = document.querySelector("#heart");

  heart.addEventListener("click", function () {
    const favorite = document.createElement("li");
    favorite.textContent = "liked @ " + counter.textContent;
    likes.append(favorite);
  });

  const commentForm = document.querySelector("#comment-form");
  const div1 = document.querySelector("#list");
  const commentList = document.createElement("ul");
  div1.append(commentList);

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const comment = document.createElement("li");
    comment.textContent = e.target.comment.value;
    commentList.append(comment);
    commentForm.reset();
  });
});
