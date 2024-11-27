const tabs = document.querySelectorAll(".tab-item");
const content = document.querySelectorAll(".tabs-content");

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    const activeTab = document.querySelector(".tab-active");
    activeTab.classList.remove("tab-active");
    tab.classList.add("tab-active");
    const activeContent = document.querySelector(".content-active");
    activeContent.classList.remove("content-active");
    content[index].classList.add("content-active");
  };
});

const images = [
  "https://avatars.mds.yandex.net/i?id=5a859b1946ff1dcd815902a98883b8ec32830d78-5888810-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=95c0b4c47f95c0680cb1d910259456e0_l-5220604-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=18d8f544cd3c084327ef589ec0551cbd_l-5237981-images-thumbs&n=13",
];
const img = document.querySelector(".slider-img");
const btnLeft = document.querySelector(".slider-left");
const btnRight = document.querySelector(".slider-right");
const sliderPoints = document.querySelectorAll(".slider-point");

let index = 0;
let infinity = false;

btnLeft.onclick = sliderLeft;
btnRight.onclick = sliderRight;
if (infinity){
    btnLeft.removeAttribute("disabled");
}

function sliderLeft() {
  if (index > 0) {
    index--;
    changeSlide();
    if (!infinity){
        changeLeftBtn();
    }
  }
  else{
    index = images.length - 1;
    changeSlide();
  }
}

function sliderRight() {
  if (index < images.length - 1) {
    index++;
    changeSlide();
    if (!infinity){
        changeRightBtn();
    }
  }
  else{
    index = 0;
    changeSlide();
  }
}

function changeSlide() {
  img.src = images[index];

  const pointActive = document.querySelector(".point-active");
  pointActive.classList.remove("point-active");
  sliderPoints[index].classList.add("point-active");
}

function changeLeftBtn(){
    if (index == 0) {
        btnLeft.setAttribute("disabled", true);
      }
  
      btnRight.removeAttribute("disabled");
}

function changeRightBtn(){
    if (index == images.length - 1) {
        btnRight.setAttribute("disabled", true);
      }
  
      btnLeft.removeAttribute("disabled");
}