const patternDivider = document.getElementById("pattern-divider");
const adviceSlipUrl = "	https://api.adviceslip.com/advice";
const advice = document.getElementById("advice");
const adviceNum = document.getElementById("advice-number");
const adviceAnimation = Array.from(document.querySelectorAll(".advice-animation"));
const dice = document.getElementById("dice");

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1440) {
    patternDivider.src = "build/images/pattern-divider-desktop.svg";
  }
  else {
    patternDivider.src = "build/images/pattern-divider-mobile.svg";
  }
})

dice.addEventListener('click', () => {
  fetch(adviceSlipUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    advice.innerText = data.slip.advice;
    adviceNum.innerText = data.slip.id;
    advice.classList.add('animate-fadeIn');
    adviceNum.classList.add('animate-fadeIn');
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

adviceAnimation.forEach(adviceEle => {
  adviceEle.addEventListener('animationend', e => {
    adviceEle.classList.remove('animate-fadeIn');
  });
});

