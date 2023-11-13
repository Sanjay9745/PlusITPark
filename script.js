// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-bars");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


//stack card
      document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");
  var currentCard = document.querySelector(".card--current");
  var cardInterval;

  function changeCard() {
    var nextCard = currentCard.nextElementSibling;

    if (!nextCard) {
      nextCard = document.querySelector(".card");
    }

    cards.forEach(function (c) {
      c.classList.remove("card--current", "card--out", "card--next");
    });

    currentCard.classList.add("card--out");
    currentCard = nextCard;
    currentCard.classList.add("card--current");

    var nextNextCard = currentCard.nextElementSibling;

    if (!nextNextCard) {
      nextNextCard = document.querySelector(".card");
    }

    nextNextCard.classList.add("card--next");
  }

  function setCardInterval() {
    cardInterval = setInterval(function () {
      changeCard();
    }, 5000); // Change card automatically every 5 seconds
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      clearInterval(cardInterval); // Stop automatic card change when user interacts
      changeCard();
      setCardInterval();
    });
  });

  // Set initial automatic card change interval
  setCardInterval();

  if (!currentCard) {
    var allCards = document.querySelectorAll(".card");
    currentCard = allCards[allCards.length - 1];
    currentCard.click();
  }
});

//stack card

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");
  var currentCard = document.querySelector(".card--current");
  var cardInterval;

  function changeCard() {
    var nextCard = currentCard.nextElementSibling;

    if (!nextCard) {
      nextCard = document.querySelector(".card");
    }

    cards.forEach(function (c) {
      c.classList.remove("card--current", "card--out", "card--next");
    });

    currentCard.classList.add("card--out");
    currentCard = nextCard;
    currentCard.classList.add("card--current");

    var nextNextCard = currentCard.nextElementSibling;

    if (!nextNextCard) {
      nextNextCard = document.querySelector(".card");
    }

    nextNextCard.classList.add("card--next");
  }

  function setCardInterval() {
    cardInterval = setInterval(function () {
      changeCard();
    }, 5000); // Change card automatically every 5 seconds
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      clearInterval(cardInterval); // Stop automatic card change when user interacts
      changeCard();
      setCardInterval();
    });
  });

  // Set initial automatic card change interval
  setCardInterval();

  if (!currentCard) {
    var allCards = document.querySelectorAll(".card");
    currentCard = allCards[allCards.length - 1];
    currentCard.click();
  }
});



