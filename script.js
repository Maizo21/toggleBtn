"use strict";

function toggle(button, iconOff, iconOn) {
  if (document.querySelector(`${button}`).checked) {
    document
      .querySelector(`${button}`)
      .closest(".inputBox")
      .querySelector(`label`).textContent = `${iconOn}`;
  } else {
    document
      .querySelector(`${button}`)
      .closest(".inputBox")
      .querySelector(`label`).textContent = `${iconOff}`;
  }
}

document.querySelector("#toggle").addEventListener("click", function () {
  toggle("#toggle", "🛬", "🛫");
  if (document.querySelector(`#toggle`).checked) {
    document
      .querySelector(`#toggle`)
      .closest("section")
      .querySelector(".inputBoxText")
      .classList.remove("hide");
  } else {
    document
      .querySelector(`#toggle`)
      .closest("section")
      .querySelector(".inputBoxText")
      .classList.add("hide");
  }
});

document.querySelector("#toggle-sun").addEventListener("click", function () {
  toggle("#toggle-sun", "🌞", "🌚");
  if (document.querySelector(`#toggle-sun`).checked) {
    document.body.style.backgroundColor = "#100F10";
    document.querySelector(".inputBoxText").classList.add("textLight");
  } else {
    document.body.style.backgroundColor = "#363636";
    document.querySelector(".inputBoxText").classList.remove("textLight");
  }
});
