// المان ها را وسط چین کن
function centerELM() {
  const containerElm = document.querySelector(".container");
  let winHeight = window.innerHeight;
  let winwidth = window.innerWidth;
  let elmWidth = containerElm.offsetWidth;
  let elmHeight = containerElm.offsetHeight;
  let leftelm = (winwidth - elmWidth) / 2;
  let topelm = (winHeight - elmHeight) / 2;
  containerElm.style.marginTop = `${topelm}px`;
  containerElm.style.marginLeft = `${leftelm}px`;
}
centerELM();
//برو برای رنگ ها
let clickCount = 0;
let clickCountLS;
localStorage.setItem("clickCount", clickCount);

const circleElm = document.querySelectorAll(".cir");
const lineElm = document.querySelectorAll(".line");
const nextElm = document.querySelector(".next");
const prevElm = document.querySelector(".prev");
nextElm.addEventListener("click", clickCirNextHandler);
prevElm.addEventListener("click", clickCirPrevHandler);
function clickCirNextHandler(event) {
  clickCountLS = localStorage.getItem("clickCount");
  if (clickCountLS > -1 && clickCountLS < 3) {
    prevElm.classList.remove("disable");
    circleElm[clickCountLS].style.borderColor = "black";
    if (clickCountLS > 0) {
      lineElm[clickCountLS - 1].style.borderColor = "black";
    }
    clickCountLS++;
    localStorage.setItem("clickCount", clickCountLS);
  } else {
    lineElm[clickCountLS - 1].style.borderColor = "black";
    nextElm.className += " disable";
    event.preventDefault();
    return;
  }
}
function clickCirPrevHandler(event) {
  clickCountLS = localStorage.getItem("clickCount");
  if (clickCountLS > 1 && clickCountLS <= 3) {
    nextElm.classList.remove("disable");
    circleElm[clickCountLS - 1].style.borderColor = "rgb(82, 82, 193)";
    lineElm[clickCountLS - 1].style.borderColor = "rgb(82, 82, 193)";
    localStorage.setItem("clickCount", clickCountLS - 1);
  } else {
    lineElm[clickCountLS - 1].style.borderColor = "rgb(82, 82, 193)";
    circleElm[clickCountLS].style.borderColor = "rgb(82, 82, 193)";
    prevElm.className += " disable";
    clickCount = 0;
    localStorage.setItem("clickCount", clickCountLS - 1);
    event.preventDefault();
    return;
  }
}
