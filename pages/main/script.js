// BURGER

(function () {
    const burgerItem = document.querySelector('.hamburger');
    // console.log(burgerItem);
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    const menuCloseNav = document.querySelector('.header_nav');
    const trans = document.getElementById('transID');
    burgerItem.addEventListener('click', () => {
        // console.log('1');
        menu.classList.add('header_nav-active');
        trans.classList.add('transClass');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav-active')
        trans.classList.remove('transClass');
    });
    menuCloseNav.addEventListener('click', () => {
        menu.classList.remove('header_nav-active');
        trans.classList.remove('transClass');
    });
    for (let i = 1; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header_nav-active');
            trans.classList.remove('transClass');
        });
    };
}());

// POP-UP

(function () {
    const feedbackCard = document.querySelectorAll('.feedback-card');
    const trans = document.getElementById('transID-Pop-up');
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close-popup');

    for (let i = 0; i < feedbackCard.length; i++) {
        feedbackCard[i].addEventListener('click', () => {
            trans.classList.toggle('transClass');
            trans.addEventListener('click', () => {
                trans.classList.remove('transClass');
                popup.classList.remove('popup-active');
                setTimeout(() => {
                    clone.remove();
                }, 550);
            });
            close.addEventListener('click', () => {
                trans.classList.remove('transClass');
                popup.classList.remove('popup-active');
                setTimeout(() => {
                    clone.remove();
                }, 550);
            });
            popup.addEventListener('click', (event) => {
                if (event.target.classList.contains('popup')) {
                    popup.classList.remove('popup-active');
                    trans.classList.remove('transClass');
                    setTimeout(() => {
                        clone.remove();
                    }, 550);
                }
            });
            let clone = feedbackCard[i].cloneNode(true);
            popup.classList.add('popup-active');
            popup.append(clone);
        });
    }
}());

// TESTIMONIALS CAROUSEL

const range = document.querySelector('input[type="range"]');
const slider = document.querySelector('.feedback-container');
const users = document.querySelectorAll('.feedback-card');
const pageWidth = document.documentElement.scrollWidth;

if (pageWidth <= 1000) {
    range.max = 8;
}

// console.log(range.value);
let value = range.value;
// console.log(value);
let prevRange = 0;
let curRange;
let direction;

function getValue(value) {
    curRange = value;
    if (curRange > prevRange) {
        direction = 'right';
        // console.log('right')
    }
    else if (curRange < prevRange) {
        direction = 'left';
        // console.log('left')
    }
    prevRange = curRange;
    return direction;
}

// console.log(direction)

function move() {
    value = range.value;
    getValue(value);
    // console.log(direction)
    // console.log(initRange);
    // console.log(value);
    if (direction === 'right') {
        slider.classList.add('slide-left');
        users[curRange - 1].style.display = 'none';
    } else if (direction === 'left') {
        slider.classList.add('slide-right');
    }
    range.removeEventListener('input', move);
    range.disabled = true;
    return curRange;
}

range.addEventListener('input', move)

slider.addEventListener('animationend', (animEvent) => {
    // console.log(curRange)
    if (animEvent.animationName === 'slide-left') {
        slider.classList.remove('slide-left');
        users[curRange - 1].style.display = 'none';
        range.disabled = false;
    }
    else {
        slider.classList.remove('slide-right');
        // users[curRange + 1].style.display = 'none';
        users[curRange].style.display = 'block';
        range.disabled = false;
    }
    range.addEventListener('input', move);
    range.disabled = false;
});

// PETS CAROUSEL
(function () {
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth >= 640) {
        const BTN_LEFT = document.querySelector('.prev');
        const BTN_RIGHT = document.querySelector('.next');
        const CAROUSEL = document.querySelector("#carousel");
        let ITEM_LEFT = document.querySelector("#item-left");
        let ITEM_RIGHT = document.querySelector("#item-right");
        const petCard = document.querySelectorAll('.pet-card');
        // console.log(pageWidth);

        const createCardTemplate = () => {
            const card = document.createElement("div");
            card.classList.add("pet-card");
            return card;
        }

        const moveLeft = () => {
            CAROUSEL.classList.add("transition-left");
            BTN_LEFT.removeEventListener("click", moveLeft);
            BTN_RIGHT.removeEventListener("click", moveRight);
        };

        const moveRight = () => {
            CAROUSEL.classList.add("transition-right");
            BTN_LEFT.removeEventListener("click", moveLeft);
            BTN_RIGHT.removeEventListener("click", moveRight);
        };

        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);

        function createItemLeft() {
            let changedItem = ITEM_LEFT;
            let ran = new Set();
            let setFill = function() {
                if (pageWidth >= 999) {
                    while (ran.size < 6) {
                        let random = Math.floor(Math.random() * 6);
                        ran.add(random);
                    }
                } else {
                    while (ran.size < 4) {
                        let random = Math.floor(Math.random() * 6);
                        ran.add(random);
                    }
                }
                return ran;
            }

            let randomCard = function() {
                changedItem.innerHTML = "";
                if (pageWidth >= 999) {
                    for (let i = 0; i < 6; i++) {
                        const card = createCardTemplate();
                        setFill();
                        changedItem.appendChild(card);
                        card.innerHTML = petCard[[...ran][i]].innerHTML;
                    }
                } else {
                    for (let i = 0; i < 4; i++) {
                        const card = createCardTemplate();
                        setFill();
                        changedItem.appendChild(card);
                        card.innerHTML = petCard[[...ran][i]].innerHTML;
                    }
                }
                return changedItem;
            }

            randomCard();
            ITEM_LEFT.innerHTML = changedItem.innerHTML;
            return ITEM_LEFT;
        }

        function createItemRight() {
            let changedItem = ITEM_RIGHT;
            let ran = new Set();
            let setFill = function() {
                if (pageWidth >= 999) {
                    while (ran.size < 6) {
                        let random = Math.floor(Math.random() * 6);
                        ran.add(random);
                    }
                } else {
                    while (ran.size < 4) {
                        let random = Math.floor(Math.random() * 6);
                        ran.add(random);
                    }
                }
                return ran;
            }

            let randomCard = function() {
                changedItem.innerHTML = "";
                if (pageWidth >= 999) {
                    for (let i = 0; i < 6; i++) {
                        const card = createCardTemplate();
                        setFill();
                        changedItem.appendChild(card);
                        card.innerHTML = petCard[[...ran][i]].innerHTML;
                    }
                } else {
                    for (let i = 0; i < 4; i++) {
                        const card = createCardTemplate();
                        setFill();
                        changedItem.appendChild(card);
                        card.innerHTML = petCard[[...ran][i]].innerHTML;
                    }
                }
                return changedItem;
            }

            randomCard();
            ITEM_RIGHT.innerHTML = changedItem.innerHTML;
            return ITEM_RIGHT;
        }

        createItemLeft();
        createItemRight();

        CAROUSEL.addEventListener("animationend", (animationEvent) => {
            let changedItem;
            if (animationEvent.animationName === "move-left") {
                CAROUSEL.classList.remove("transition-left");
                changedItem = ITEM_LEFT;
                document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
            } else {
                CAROUSEL.classList.remove("transition-right");
                changedItem = ITEM_RIGHT;
                document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
            }

            let ran = new Set();
            let setFill = function() {
                if (pageWidth >= 999) {
                    while (ran.size < 6) {
                        let random = Math.floor(Math.random() * 6);
                        ran.add(random);
                    }
                } else {
                    while (ran.size < 4) {
                        let random = Math.floor(Math.random() * 6);
                        ran.add(random);
                    }
                }
                return ran;
            }

            let randomCard = function() {
                changedItem.innerHTML = "";
                if (pageWidth >= 999) {
                    for (let i = 0; i < 6; i++) {
                        const card = createCardTemplate();
                        setFill();
                        changedItem.appendChild(card);
                        card.innerHTML = petCard[[...ran][i]].innerHTML;
                    }
                } else {
                    for (let i = 0; i < 4; i++) {
                        const card = createCardTemplate();
                        setFill();
                        changedItem.appendChild(card);
                        card.innerHTML = petCard[[...ran][i]].innerHTML;
                    }
                }
                return changedItem;
            }

            randomCard();

            BTN_LEFT.addEventListener("click", moveLeft);
            BTN_RIGHT.addEventListener("click", moveRight);
        })
    }
}());