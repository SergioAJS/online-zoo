// BURGER

(function () {
    const burgerItem = document.querySelector('.hamburger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    const menuCloseNav = document.querySelector('.header_nav');
    const trans = document.getElementById('transID');
    burgerItem.addEventListener('click', () => {
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

// DONATE

(function () {
    const radio = document.querySelectorAll('.sum');
    const radioInput = document.querySelectorAll('input[name="value"]');
    const inputValue = document.querySelector('#amount');
    const inputs = document.querySelectorAll('input[type=number]');

    Array.from(inputs).forEach(input => {
        const min = +input.min;
        const max = +input.max;

        input.addEventListener('input', (e) => {
            const value = +input.value;
            if (value > max) {input.value = max}
            else if (value < min) {input.value = min}
        })
    });

    for (let i = 0; i < radio.length; i++) {
        radio[i].addEventListener('click', () => {
            inputValue.value = radioInput[i].value;
        })
        inputValue.addEventListener('input', () => {
            if (inputValue.value == 5000) {
                radioInput[0].checked = true;
            }
            else if (inputValue.value == 2000) {
                radioInput[1].checked = true;
            }
            else if (inputValue.value == 1000) {
                radioInput[2].checked = true;
            }
            else if (inputValue.value == 500) {
                radioInput[3].checked = true;
            }
            else if (inputValue.value == 250) {
                radioInput[4].checked = true;
            }
            else if (inputValue.value == 100) {
                radioInput[5].checked = true;
            }
            else if (inputValue.value == 50) {
                radioInput[6].checked = true;
            }
            else if (inputValue.value == 25) {
                radioInput[7].checked = true;
            }
            else {
                radioInput[i].checked = false;
            }
        })
    }
}());




