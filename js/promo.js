let promo = document.querySelector('.promo-inp')
let button = document.querySelector('.promo-btn')
let promoCalc = document.createElement('p');
let activeBtn = document.querySelector('.active-btn')
let inactiveBtn = document.querySelector('.inactive-btn')
promoCalc.className = 'promoCalc'

let firstPair = []
let secondPair = []
let thirdPair = []
let fourthPair = []

button.setAttribute('disabled', true);
promo.oninput = function () {
    if (promo.value.length == 8) {
        button.removeAttribute('disabled');
        button.classList.remove('inactive-btn');
        button.classList.add('active-btn');
    } else {
        button.setAttribute('disabled', true);
        button.classList.remove('active-btn');
        button.classList.add('inactive-btn');
    }
}

function numLength(num) {
    let count = 0
    while (num >= 1) {
        num = num / 10
        count++
    }
    return count
}

function pushNumber(actualNum) {
    let remainder = actualNum % 10
    let newActualNumber = Math.floor(actualNum / 10)

    if (numLength(newActualNumber) <= 7 && numLength(newActualNumber) >= 6) {
        fourthPair.unshift(remainder)
    }
    if (numLength(newActualNumber) <= 5 && numLength(newActualNumber) >= 4) {
        thirdPair.unshift(remainder)
    }
    if (numLength(newActualNumber) <= 3 && numLength(newActualNumber) >= 2) {
        secondPair.unshift(remainder)
    }
    if (numLength(newActualNumber) <= 1 && numLength(newActualNumber) >= 0) {
        firstPair.unshift(remainder)
    }
    return newActualNumber
}

function parity(arr1) {
    let arr2 = []
    if (arr1[0] % 2 == 0 && arr1[1] % 2 == 0) {
        arr2.push('even')
    }
    if (arr1[0] % 2 != 0 && arr1[1] != 0) {
        arr2.push('odd')
    }
    if (arr1[0] % 2 == 0 && arr1[1] % 2 != 0) {
        arr2.push('mix')
    }
    if (arr1[1] % 2 == 0 && arr1[0] % 2 != 0) {
        arr2.push('mix')
    }
    return arr2
}

//

function inputNumber() {


    let newActualPromoNumber = promo.value
    let promoLength = numLength(promo.value)

    if (promoCalc.innerHTML != '') {
        promoCalc.innerHTML = '';
    }

    if (promo.value.length == 8) {

        for (i = 0; i < promoLength; i++) {
            newActualPromoNumber = pushNumber(newActualPromoNumber)
        }

        let parityFirstPair = parity(firstPair)
        let paritySecondPair = parity(secondPair)
        let parityThirdPair = parity(thirdPair)
        let parityFourthPair = parity(fourthPair)

        let arr3 = firstPair.concat(secondPair).concat(thirdPair).concat(fourthPair)
        let even = 0
        let odd = 0
        for (i = 0; i < arr3.length; i++) {
            if (arr3[i] % 2 == 0) {
                even += arr3[i]
            }
            if (arr3[i] % 2 != 0) {
                odd += arr3[i]
            }
        }
        console.log(parityFirstPair)
        console.log(paritySecondPair)
        console.log(parityThirdPair)
        console.log(parityFourthPair)

        if (parityFirstPair[0] == parityThirdPair[0] && parityFirstPair[0] == 'even' && paritySecondPair[0] == 'odd' && firstPair[0] < firstPair[1] && thirdPair[0] < thirdPair[1]) {
            promoCalc.innerHTML = 'Value of promotion 2000 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (parityFirstPair[0] == parityThirdPair[0] && parityFirstPair[0] == 'even' && paritySecondPair[0] == 'odd') {
            promoCalc.innerHTML = 'Value of promo code 1000 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (parityFirstPair[0] == parityFourthPair[0] && parityFirstPair[0] == 'even' && paritySecondPair[0] == 'odd' && firstPair[0] < firstPair[1] && fourthPair[0] < fourthPair[1]) {
            promoCalc.innerHTML = 'Value of promo code 2000 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (parityFirstPair[0] == parityFourthPair[0] && parityFirstPair[0] == 'even' && paritySecondPair[0] == 'odd') {
            promoCalc.innerHTML = 'Value of promo code 1000 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (paritySecondPair[0] == parityFourthPair[0] && paritySecondPair[0] == 'even' && parityThirdPair[0] == 'odd' && secondPair[0] < secondPair[1] && fourthPair[0] < fourthPair[1]) {
            promoCalc.innerHTML = 'Value of promo code 2000 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (paritySecondPair[0] == parityFourthPair[0] && paritySecondPair[0] == 'even' && parityThirdPair[0] == 'odd') {
            promoCalc.innerHTML = 'Value of promo code 1000 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (even > odd) {
            promoCalc.innerHTML = 'Value of promo code 200 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else if (odd > even) {
            promoCalc.innerHTML = 'Value of promo code 100 UAH';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
        else {
            promoCalc.innerHTML = 'Promo code wrong!';
            document.querySelector('.promo').appendChild(promoCalc);
            promo.value = '';
        }
    }
    else {
        promoCalc.innerHTML = 'Promo code wrong!';
        document.querySelector('.promo').appendChild(promoCalc);
        promo.value = '';
    }
    button.setAttribute('disabled', true);
    button.classList.add('inactive-btn');
    button.classList.remove('active-btn');
}

document.querySelector('.promo-inp').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        inputNumber();
    }
});

document.querySelector('.promo-btn').addEventListener('click', (e) => {
    inputNumber();
});