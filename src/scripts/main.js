'use strict';

// container with cards
const cards = document.querySelector('.cards-container');

// switching buttons list
const homePageBtn = document.querySelector('#homepage');
const storeBtn = document.querySelector('#store');
const couponsBtn = document.querySelector('#coupons');

// buttons events when clicked
homePageBtn.onclick = () => {
  handleScroll('homepage');
};

storeBtn.onclick = () => {
  handleScroll('store');
};

couponsBtn.onclick = () => {
  handleScroll('coupons');
};

// help function for scroll
function handleScroll(name) {
  switch (name) {
    case 'homepage':
      cards.scroll(0, 0);
      break;

    case 'store':
      cards.scroll(340, 0);
      break;

    case 'coupons':
      cards.scroll(680, 0);
      break;
  }
}
