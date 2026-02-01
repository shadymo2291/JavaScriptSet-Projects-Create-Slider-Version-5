// Create Slider Version-5 Application:
// =====================================

let myItems = Array.from(document.querySelectorAll(".item"));
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let activeItem = 0;
let start = false;

// Stop hte Effect Of the first active background during loading the page:

myItems[activeItem].classList.add("active");

if (!start === true) {
  start = true;
  myItems[activeItem].style.transition = "All 0s";
  setTimeout(() => {
    myItems[activeItem].removeAttribute("style");
  }, 1000);
}

// change the Background to next one by next btn:

nextBtn.addEventListener("click", getNextBackground);

// change the Background to prev one by prev btn:

prevBtn.addEventListener("click", getPrevBackground);

// Set timer to change the Background Automaticly:

let intervalTime = 8000;

let timer = setInterval(getNextBackground, intervalTime);

nextBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(getNextBackground, intervalTime);
});

prevBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(getNextBackground, intervalTime);
});

// get Next Bckground:

function getNextBackground() {
  myItems.forEach((item) => {
    item.classList.remove("active");
  });

  if (activeItem < myItems.length - 1) {
    activeItem++;

    myItems[activeItem].classList.add("active");
  } else {
    activeItem = 0;

    myItems[activeItem].classList.add("active");
  }
}

// get prev Bckground:

function getPrevBackground() {
  myItems.forEach((item) => {
    item.classList.remove("active");
  });

  if (activeItem > 0) {
    activeItem--;

    myItems[activeItem].classList.add("active");
  } else {
    activeItem = myItems.length - 1;

    myItems[activeItem].classList.add("active");
  }
}
