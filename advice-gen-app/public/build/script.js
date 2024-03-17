const patternDivider = document.getElementById("pattern-divider");
const advice = document.getElementById("advice");
const adviceNum = document.getElementById("advice-number");
const adviceAnimation = Array.from(document.querySelectorAll(".advice-animation"));
const dice = document.getElementById("dice");
let adviceText = '';
let adviceId = '';
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    patternDivider.src = "build/images/pattern-divider-desktop.svg";
  }
  else {
    patternDivider.src = "build/images/pattern-divider-mobile.svg";
  }
})

async function fetchRandomAdvice() {
  try {
    adviceAnimation.forEach(adviceEle => {
      adviceEle.classList.remove('animate-fadeOut');
      adviceEle.classList.remove('animate-fadeIn');
    });
    const randomId = Math.floor(Math.random() * 224) + 1;
  

    const response = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
    if (!response.ok) {
      throw new Error(`Resource was unable to be reached`);
    }
      
    const data = await response.json();
    adviceText = `"${data.slip.advice}"`;
    adviceId = data.slip.id;
    advice.classList.add('animate-fadeOut');
    adviceNum.classList.add('animate-fadeOut');
  }
  catch (error){
    console.error(error);
  }
}

dice.addEventListener('click', fetchRandomAdvice);

adviceAnimation.forEach(adviceEle => {
  adviceEle.addEventListener('animationend', e => {
    if (e.animationName === 'fadeOut') {
      advice.innerText = adviceText;
      adviceNum.innerText = adviceId;
      adviceEle.classList.remove('animate-fadeOut');
      adviceEle.classList.add('animate-fadeIn');
    }
  });
})