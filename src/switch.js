const colors = [
 
  '#FF0000',
  '#FF4500',
  '#0000CD',
  '#FFFF00',
  '#DA70D6',
  '#4158D0',
  '#FFCC70',
  'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
  'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
  'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
  'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
  'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
  'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
  'linear-gradient(45deg, #FFFFFF 0%, #4CAF50 100%)',
  'linear-gradient(45deg, #FA8BFF 0%, #DA70D6 52%, #4CAF50 90%)',
  'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',



  
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]')
}
// console.log(refs.buttonStart)
const DELAY = 1000;
let interval = undefined
refs.buttonStart.addEventListener('click', onStartButtonClick);
refs.buttonStop.addEventListener('click',onStopButtonClick)
 refs.buttonStop.classList.add('deactive')
function onStartButtonClick() {

  changeColors()
  
}

function onStopButtonClick() {
    clearInterval(interval)
  refs.buttonStart.removeAttribute('disabled', '');
  refs.buttonStop.classList.add('deactive')
  refs.buttonStart.classList.remove('deactive')
}

function changeColors() {
  refs.buttonStop.classList.toggle('deactive')
  refs.buttonStart.setAttribute('disabled', '');
  refs.buttonStart.classList.toggle('deactive');
  
    interval = setInterval(() => { 
      document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
},DELAY)
}



