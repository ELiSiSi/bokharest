let buttons = document.querySelectorAll('.menu .box button');
let boxes = document.querySelectorAll('.menu .box');

let lastActiveIndex = -1; // علشان نعرف الزر اللي اتضغط آخر مرة
let scroll = 0;
buttons.forEach(function (button , index) {
  button.onclick = function () {
    if (lastActiveIndex === index) {

      button.style.cssText = `
  background-color: var(--hover-color);
`;
     boxes[index].querySelector('img').style.display = "none";

      lastActiveIndex =  -1;

     }else if(lastActiveIndex !== index) {
      buttons.forEach(function (bu , i){

      bu.style.cssText = `
  background-color: var(--hover-color);
`;
    boxes[i].querySelector('img').style.display = " none";


      })
      button.style.cssText = `
  background-color: #2ecc71;
`;
 boxes[index].querySelector('img').style.cssText =  `
  opacity: 1;
  transform: scale(1);
     transition:  10s  ;
  display: inline-block;

`;

      lastActiveIndex = index;
    }
  };
});
