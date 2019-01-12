
let modal = document.querySelector(".modal");
let gridContainer = document.querySelector(".grid-container");
let gridBox = document.querySelectorAll(".img-grid");
let imgGrid = document.querySelectorAll(".grid-container > .img-grid > img");


var wrapper = document.createElement("div");
wrapper.className = "wrapper";
modal.appendChild(wrapper);

let sliderContainer = document.createElement("div");
sliderContainer.className = "slider";
wrapper.appendChild(sliderContainer);

let closeBtn = document.createElement("button");
closeBtn.className = "close-btn";
closeBtn.innerHTML = "close";
modal.appendChild(closeBtn);

var pagination = document.createElement("div");
pagination.className =  "pagination";
wrapper.appendChild(pagination);

var caption = document.createElement("div");
caption.className = "caption";
wrapper.appendChild(caption);

var title = document.createElement("div");
title.className = "title";
wrapper.appendChild(title);

var nextBtn = document.createElement("button");
nextBtn.className = "next-btn";
nextBtn.innerHTML = "next"
wrapper.appendChild(nextBtn)

var prevBtn = document.createElement("button");
prevBtn.className = "prev-btn";
prevBtn.innerHTML = "prev"
wrapper.appendChild(prevBtn)






// for loop
for (let i = 0; i < imgGrid.length; i++) {
  var para = document.createElement("p");
  para.innerHTML = imgGrid[i].attributes["data-title"].value;
  gridBox[i].appendChild(para);


  var dots = document.createElement("span");
  dots.className = `dots dot${[i + 1]}`;
  dots.setAttribute("onclick", `openCurrent(${[i + 1]})`);
  pagination.appendChild(dots);

  var imgSrc = imgGrid[i].attributes["src"].value;
  var imgSlider= `<img src="${imgSrc}">`;
  sliderContainer.innerHTML += imgSlider;

  // set clicking events for image
  imgGrid[i].setAttribute("onclick", `openCurrent(${[i + 1]}); openModal()`);

  imgGrid[i].addEventListener("mouseenter", function() {
    var pop = this.attributes["data-title"].value;

  })



}


// starting slider
var slider = document.querySelector(".slider");
var sliderImg = document.querySelectorAll(".slider > img");
var close = document.querySelector(".close-btn");
var dot = document.querySelectorAll(".dots");
var index = 1;
var title;
var loop;

function openCurrent(n) {
  show(index = n)
}

function incrementSlide(n) {
  show(index += n)
}

function show() {
  if ( index > sliderImg.length ) {
    index = 1
  }
  if ( index < 1) {
    index = sliderImg.length;
  }
  for ( let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].style.opacity = "0";
  }
  sliderImg[index-1].style.opacity = "1";
  for ( let i = 0; i < dot.length; i++) {
    dot[i].style.backgroundColor = "#eee";
  }
  dot[index-1].style.backgroundColor = "grey";

  caption.innerHTML = `${index} / ${sliderImg.length}`;
  let imgTitle = imgGrid[index-1].attributes["data-title"].value;
  title.innerHTML = imgTitle;

}

nextBtn.addEventListener("click", function() {
  show(index++);
});

prevBtn.addEventListener("click", function() {
  show(index--);
});

function openModal() {
  modal.style.opacity = '1';
  modal.style.zIndex = '9';
  modal.style.visibility = 'visible';

}


close.addEventListener("click", function() {
  modal.style.opacity = '0';
  modal.style.zIndex = '-1';
  modal.style.visibility = 'visible';
});

document.addEventListener("click", function(e) {
  if (event.target.className === "modal"){
    modal.style.opacity = '0';
    modal.style.zIndex = '-1';
    modal.style.visibility = 'visible';
  }
})

// Setting the interval
// If you want to see the image looping, uncomment this code and rerun it
// It should loop;

// loop = setInterval(function() {
//     show(index++);
//   },3000);


// wrapper.addEventListener("mouseenter", function() {
//     clearInterval(loop)
// });
// wrapper.addEventListener("mouseleave", function() {
//     loop = setInterval(function() {
//         index++;
//         show();
//     },3000)
// })


// doing some cool stuff






window.addEventListener("load", show, false);
