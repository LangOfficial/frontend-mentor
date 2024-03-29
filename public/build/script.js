const menuButton = document.getElementById('menu-button');
const exitMenuButton = document.getElementById('exit-menu-button');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

// ADD TO CART
const addQuantity = document.querySelector('[data-add]');
const minusQuantity = document.querySelector('[data-minus]');
const totalAddedQuantity = document.querySelector('[data-total-added-quantity');

// CART SCREEN
const cart = document.querySelector('[data-cart]');
const cartScreen = document.querySelector('[data-cart-screen]');
const cartEmptyMsg = document.querySelector('[data-cart-empty]');
const cartItemsContainer = document.querySelector('[data-cart-items]');
const cartAddElem = document.querySelector('[data-cart-add]');
const cartCheckoutElem = document.querySelector('[data-cart-checkout]');
const cartBadge = document.querySelector('[data-cart-badge]');
let cartItemsCount = 0;

// THUMBNAIL
const thumbnailContainer = document.querySelector('[data-thumbnail-container]');
const shownProduct = document.querySelector('[data-shown-product]');

const prodCarousel = document.getElementById('product-carousel');

const thumbnailLBContainer = document.querySelector('[data-thumbnail-lightbox-container]');
const overlay2 = document.getElementById('overlay-2');
const exitLB = document.querySelector('[exit-light-box]');

//**probably easier to watch what's in the cart by an object**
//Made it more complicated than it should had
//First time using flowbite (for the carousel) and can't really pause the animation, so I just stick with until I learn React
//I had trouble imporitng flowbite via npm and can't find a tutorial so my bad.

function menuToggle() {
  overlay.classList.toggle('hidden');
  menu.classList.remove('hidden');
  menu.classList.toggle('animate-slideIn');
  menu.classList.toggle('animate-slideOut');
}

function exitLBToggle() {
  overlay2.classList.add('halfxl:hidden');
  overlay2.classList.add('hidden');
  prodCarousel.classList.add('halfxl:hidden');
  thumbnailLBContainer.classList.add('hidden');
}

menuButton.addEventListener('click', () => {
  menuToggle()
});

exitMenuButton.addEventListener('click', () => {
  menuToggle();
});

menu.addEventListener('animationend', e => {
  if (e.animationName === 'slideIn') {
    menu.classList.add('hidden');
  }
});

addQuantity.addEventListener('click', ()=>{
  totalAddedQuantity.innerHTML++;
});

minusQuantity.addEventListener('click', ()=>{
  if (totalAddedQuantity.innerHTML > 0) {
    totalAddedQuantity.innerHTML--;
  }
});

cart.addEventListener('click', () => {
  cartScreen.classList.toggle('hidden');
  console.log('cart click ' + cartItemsCount);
  if (cartItemsCount === 0) {
    cartEmptyMsg.classList.toggle('hidden');
    cartCheckoutElem.classList.toggle('hidden');
  }
  else {
    cartCheckoutElem.classList.remove('hidden');
  }
});

cartAddElem.addEventListener('click', () => {
  let previousExisted = false;
  if (totalAddedQuantity.innerText > 0) {
    const currentItems = Array.from(cartItemsContainer.children);

    currentItems.forEach(item => {
      const parentSneakers = item.closest('[data-sneakers]');
      if (parentSneakers) {
        const prodDesc = parentSneakers.querySelector('[data-prod-info]');
        const newQuantity = Number(prodDesc.getAttribute('data-quantity-num')) + Number(totalAddedQuantity.innerText);
        console.log('previous'+prodDesc.getAttribute('data-quantity-num'));
        prodDesc.setAttribute('data-quantity-num', newQuantity)
        prodDesc.innerHTML = `Fall Limited Edition Sneakers
        $125.00 x ${newQuantity} <span class="font-bold text-neutralCustom-900">$${(125 * newQuantity).toFixed(2)}</span>`
        cartBadge.innerText = newQuantity;   
        previousExisted = true;
      }
    });

    if (!previousExisted) {
      cartItemsContainer.innerHTML += `
      <div class="flex items-center justify-center p-7 gap-5" data-sneakers>
        <img class="w-14 h-14 rounded-md" src="build/images/image-product-1-thumbnail.jpg" alt="">
        <p class="text-neutralCustom-600" data-prod-info data-quantity-num=${totalAddedQuantity.innerText}>
          Fall Limited Edition Sneakers
          $125.00 x ${totalAddedQuantity.innerText} <span class="font-bold text-neutralCustom-900">$${(125 * totalAddedQuantity.innerText).toFixed(2)}</span>
        </p>
        <img class="w-8 sm:w-5 halfxl:w-8 cursor-pointer" src="build/images/icon-delete.svg" alt="delete" data-product-delete>
      </div>
      `;
      cartItemsCount++;
      cartCheckoutElem.classList.remove('hidden');
      cartEmptyMsg.classList.add('hidden');
      cartBadge.innerText = totalAddedQuantity.innerText;
      totalAddedQuantity.innerHTML = 0;
    }
  }
});

cartItemsContainer.addEventListener('click', function(event) {
  if (event.target.matches('[data-product-delete]')) {
    event.target.parentNode.remove();
    cartItemsCount--;
    if (cartItemsCount === 0) {
      cartEmptyMsg.classList.remove('hidden');
      cartCheckoutElem.classList.add('hidden');
    }
    cartBadge.innerText = '';
  }
});

thumbnailContainer.addEventListener('click', e => {
  const prodThumb = e.target.closest('.product-thumbnail-container');

  const selectedBorder = 'product-thumbnail-selected-border';
  const selectedOpacity = 'product-thumbnail-selected-opacity';

  if (prodThumb) {
     //REMOVE FROM CURRENT SELECTED
    thumbnailContainer.querySelector('.' + selectedBorder).classList.remove(selectedBorder);
    thumbnailContainer.querySelector('.' + selectedOpacity).classList.remove(selectedOpacity);

    //ADD TO NEW SELECTED
    prodThumb.classList.add(selectedBorder);
    prodThumb.querySelector('img').classList.add(selectedOpacity);
    shownProduct.src = prodThumb.querySelector('img').src.replace('-thumbnail', '');
  }
})

thumbnailLBContainer.addEventListener('click', e => {
  const prodThumb = e.target.closest('.product-thumbnail-lightbox-container');

  const selectedBorder = 'product-thumbnail-selected-border';
  const selectedOpacity = 'product-thumbnail-selected-opacity';

  if (prodThumb) {
    //REMOVE FROM CURRENT SELECTED
   thumbnailLBContainer.querySelector('.' + selectedBorder).classList.remove(selectedBorder);
   thumbnailLBContainer.querySelector('.' + selectedOpacity).classList.remove(selectedOpacity);

   //ADD TO NEW SELECTED
   prodThumb.classList.add(selectedBorder);
   prodThumb.querySelector('img').classList.add(selectedOpacity);
 }
});

shownProduct.addEventListener('click', () =>{
  overlay2.classList.toggle('halfxl:hidden');
  overlay2.classList.toggle('hidden');
  prodCarousel.classList.toggle('halfxl:hidden');
  thumbnailLBContainer.classList.toggle('hidden');
  exitLB.classList.toggle('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth < '1440') {
    exitLBToggle()
  }
})

exitLB.addEventListener('click', () => {
  exitLBToggle();
});
