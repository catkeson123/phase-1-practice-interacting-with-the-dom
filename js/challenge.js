const counter = document.querySelector("#counter");
const likes = document.querySelector(".likes");
const submitButton = document.querySelector("#submit");

const updateCounter = function () {
  counter.textContent = parseInt(counter.textContent) + 1;
};

let timerStopped = false;

document.addEventListener("DOMContentLoaded", function () {
  let timer = setInterval(updateCounter, 1000);

  const pause = document.querySelector("#pause");

  pause.addEventListener("click", function () {
    if (!timerStopped) {
      clearInterval(timer);
      pause.textContent = "resume";
      minus.disabled = true;
      plus.disabled = true;
      heart.disabled = true;
      submitButton.disabled = true;
      timerStopped = !timerStopped;
    } else if (timerStopped) {
      pause.textContent = "pause";
      timer = setInterval(updateCounter, 1000);
      minus.disabled = false;
      plus.disabled = false;
      heart.disabled = false;
      submitButton.disabled = false;
      timerStopped = !timerStopped;
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
    const foundFavorite = document.getElementById(`num-${counter.innerText}`);

    if (foundFavorite) {
      const likesCount = foundFavorite.querySelector("span");
      ++likesCount.textContent;
      if (likesCount.textContent == "2") {
        foundFavorite.append("s");
      }
    } else {
      const favorite = document.createElement("li");
      favorite.id = `num-${counter.innerText}`;
      favorite.innerHTML = `${counter.innerText} has been liked <span>1</span> time`;
      likes.append(favorite);
    }
  });

  const commentForm = document.querySelector("#comment-form");
  const div1 = document.querySelector("#list");
  const commentList = document.createElement("ul");
  div1.append(commentList);

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const comment = document.createElement("li");
    comment.textContent = e.target.comment.value + "  ";

    const btn = document.createElement("button");
    btn.textContent = "X";
    comment.append(btn);

    btn.addEventListener("click", () => {
      comment.remove();
    });

    commentList.append(comment);
    commentForm.reset();
  });
});
