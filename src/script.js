// let sliderImages = document.querySelectorAll('#imageContainer > div')
// let arrowLeft = document.querySelector('#arrow-left')
// let arrowRight = document.querySelector('#arrow-right')

// let current = 0

// const reset = () => {
//     for(let i=0;i<sliderImages.length;i++){
//         sliderImages[i].style.display = "none"
//     }
// }

// const startSlide = () => {
//     reset();
//     sliderImages[0].style.display = "block"
// }

// const slideLeft = () => {
//     console.log("LEFT")

//     reset();
//     current--
//     // if(current == 0){
//     //     current = sliderImages.length;
//     // }
//     // sliderImages[current - 1].style.display = "block";
//     if (current < 0) {
//         current = sliderImages.length - 1;
//       }
//       sliderImages[current].style.display = "block";
//     }


// const slideRight = () => {
//     console.log("RIGHT")
//     reset();
//     current++
//     if(current >= sliderImages.length){
//         current = -1;
//     }
//     sliderImages[current].style.display = "block";
// }


// arrowLeft.addEventListener("click" , slideLeft)
// arrowRight.addEventListener("click" , slideRight)

let sliderImages = document.querySelectorAll('#imageContainer > div');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

const reset = () => {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

const startSlide = () => {
  reset();
  sliderImages[0].style.display = "flex";
}

const slideLeft = () => {
  console.log("LEFT");
  reset();
  current--;
  if (current < 0) {
    current = sliderImages.length - 1;
  }
  sliderImages[current].style.display = "flex";
}

const slideRight = () => {
  console.log("RIGHT");
  reset();
  current++;
  if (current >= sliderImages.length) {
    current = 0;
  }
  sliderImages[current].style.display = "block";
}

arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);

startSlide();