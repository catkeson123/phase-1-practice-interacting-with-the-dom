const counter = document.querySelector("#counter");
const likes = document.querySelector(".likes");

const updateCounter = function () {
  counter.textContent = parseInt(counter.textContent) + 1;
};

document.addEventListener("DOMContentLoaded", function () {
  const timer = setInterval(updateCounter, 1000);

  const pause = document.querySelector("#pause");

  pause.addEventListener("click", function () {
    if (timer) {
      clearInterval(timer);
      pause.textContent = "resume";
    } else if ((pause.textContent = "resume")) {
      pause.textContent = "pause";
      setInterval(updateCounter, 1000);
    }
  });

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
