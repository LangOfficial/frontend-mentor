const brightFutureImg = document.getElementById('bright-future-img');
const menuButton = document.getElementById('menu-button');
const menuButtonImg = menuButton.querySelector('img');
const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay-shadow');
const navItems = Array.from(document.querySelectorAll('.nav-item'));

function updateImgs() {
  if ((window.innerWidth) >= '1440') {
    brightFutureImg.src = "images/image-web-3-desktop.jpg"
  }
  else {
    brightFutureImg.src = "images/image-web-3-mobile.jpg"
  }
}

function removeMobileNav() {
  menuButtonImg.src = 'images/icon-menu.svg';
  menuButtonImg.classList.add('w-14');
  menuButtonImg.classList.remove('w-8');
}

function toggleMenu() {
  menu.classList.remove('hidden');
  overlay.classList.toggle('hidden');
  document.body.classList.toggle('overflow-hidden');
}

function slideToggle() {
  menu.classList.toggle('animate-foward');
  menu.classList.toggle('animate-reverse');
}

navItems.forEach(navItem => {
  navItem.addEventListener('click', ()=> {
    removeMobileNav();
    toggleMenu();
    slideToggle();
    menu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  })
})

updateImgs();

window.addEventListener('resize', updateImgs);
menuButton.addEventListener('click', () => {
  if (menuButtonImg.classList.contains('w-14')) {
    menuButtonImg.src = 'images/icon-menu-close.svg';
    menuButtonImg.classList.remove('w-14');
    menuButtonImg.classList.add('w-8');
  }
  else {
    removeMobileNav();
  }
  toggleMenu();
});

menuButton.addEventListener('click', slideToggle);

menu.addEventListener('animationend', e=> {
  if (e.animationName === 'slideIn') {
    menu.classList.add('hidden');
  }
})