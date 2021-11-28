let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

const skillsScrollPos = 712;
const skillsScrollEnd = 1650;
const spans = document.querySelectorAll(".skills .progress .bar span");

function onSkillEnter() {
  for (let el of spans) {
    if (!el.classList.contains("animate-forward")) {
      el.classList.add("animate-forward");
    }
  }
}

function onSkillExit() {
  for (let el of spans) {
    if (el.classList.contains("animate-forward")) {
      el.classList.remove("animate-forward");
    }
  }
}

document.addEventListener("scroll", function (event) {
  if (window.scrollY > skillsScrollPos && window.scrollY < skillsScrollEnd) {
    return onSkillEnter();
  }

  onSkillExit();
});
