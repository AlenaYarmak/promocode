let promoCode = 24111124; //наш промокод
let firstPair = []
let secondPair = []
let thirdPair = []
let fourthPair = [] //создали пустые массивы для пар

let parityFirstPair
let paritySecondPair
let parityThirdPair
let parityFourthPair //переменная для присвоения проверки на четность и нечетность


let a = promoCode % 10;
promoCode = Math.floor(promoCode / 10);
fourthPair.unshift(a)

let b = promoCode % 10
promoCode = Math.floor(promoCode / 10);
fourthPair.unshift(b)

let c = promoCode % 10
promoCode = Math.floor(promoCode / 10);
thirdPair.unshift(c)

let d = promoCode % 10
promoCode = Math.floor(promoCode / 10);
thirdPair.unshift(d)

let e = promoCode % 10
promoCode = Math.floor(promoCode / 10);
secondPair.unshift(e)

let f = promoCode % 10
promoCode = Math.floor(promoCode / 10);
secondPair.unshift(f)

let g = promoCode % 10
promoCode = Math.floor(promoCode / 10);
firstPair.unshift(g)

let h = promoCode
firstPair.unshift(h) //assign individual numbers to variables
console.log(firstPair)


let checkFirstEven = firstPair.every(function (elem) {
    if (elem % 2 == 0) {
        parityFirstPair = 'even'
    }
})

let checkFirstOdd = firstPair.every(function (elem) {
    if (elem % 2 != 0) {
        parityFirstPair = 'odd'
    }
})
console.log(parityFirstPair)

let checkSecondEven = secondPair.every(function (elem) {
    if (elem % 2 == 0) {
        paritySecondPair = 'even'
    }
})

let checkSecondOdd = secondPair.every(function (elem) {
    if (elem % 2 != 0) {
        paritySecondPair = 'odd'
    }
})
console.log(paritySecondPair)

let checkThirdEven = thirdPair.every(function (elem) {
    if (elem % 2 == 0) {
        parityThirdPair = 'even'
    }
})

let checkThirdOdd = thirdPair.every(function (elem) {
    if (elem % 2 != 0) {
        parityThirdPair = 'odd'
    }
})
console.log(parityThirdPair)

let checkFourthEven = fourthPair.every(function (elem) {
    if (elem % 2 == 0) {
        parityFourthPair = 'even'
    }
})
let checkFourthOdd = fourthPair.every(function (elem) {
    if (elem % 2 != 0) {
        parityFourthPair = 'odd'
    }
})
console.log(parityFourthPair)
//проверка массивов на четность и нечетность и присвоение индикаторов


if (parityFirstPair == parityFourthPair && parityFirstPair != paritySecondPair && parityFirstPair != parityThirdPair && firstPair[0] < firstPair[1] && fourthPair[0] < fourthPair[1]) {
    alert('2000грн!')
}
else if (parityFirstPair == parityFourthPair && parityFirstPair != paritySecondPair && parityFirstPair != parityThirdPair) {
    alert('1000 грн!')
}

if (parityFirstPair == parityThirdPair && parityFirstPair != paritySecondPair && firstPair[0] < firstPair[1] && thirdPair[0] < thirdPair[1]) {
    alert('2000грн!')
}
else if (parityFirstPair == parityThirdPair && parityFirstPair != paritySecondPair) {
    alert('1000 грн!')
}

if (paritySecondPair == parityFourthPair && paritySecondPair != parityThirdPair && secondPair[0] < secondPair[1] && fourthPair[0] < fourthPair[1]) {
    alert('2000грн!')
}
else if (paritySecondPair == parityFourthPair && paritySecondPair != parityThirdPair) {
    alert('1000 грн!')
}

/* if (firstPair[0] < firstPair[1]) {
    console.log('yes')
}
if (fourthPair[0] < fourthPair[1]) {
    console.log('yes')
} */




/* if (parityFirstPair == parityFourthPair && parityFirstPair != paritySecondPair && parityFirstPair != parityThirdPair) {
    if (firstPair[0] < firstPair[1] && fourthPair[0] < fourthPair[1]) {
        alert('2000грн!')
    }
    alert('1000 грн!')
}
if (parityFirstPair == parityThirdPair && parityFirstPair != paritySecondPair) {
    if (firstPair[0] < firstPair[1] && thirdPair[0] < thirdPair[1]) {
        alert('2000грн!')
    }
    alert('1000 грн!')
}

if (paritySecondPair == parityFourthPair && paritySecondPair != parityThirdPair) {
    if (secondPair[0] < secondPair[1] && fourthPair[0] < fourthPair[1]) {
        alert('2000грн!')
    }
    alert('1000 грн!')
} */



/* sumSecondPair = 0;
for (i = 0; i < secondPair.length; i++) {
    sumSecondPair += secondPair[i]
}
if ((sumSecondPair / 2) % 2 == 0) {
    paritySecondPair = 'even'
}
else {
    paritySecondPair = 'odd'
}



sumThirdPair = 0;
for (i = 0; i < thirdPair.length; i++) {
    sumThirdPair += thirdPair[i]; 
}
if ((sumThirdPair / 2) % 2 == 0) {
    parityThirdPair = 'even'
}
else {
    parityThirdPair = 'odd'
}
console.log(parityThirdPair)


sumFourthPair = 0;
for (i = 0; i < fourthPair.length; i++) {
    sumFourthPair += fourthPair[i]; 
}
if ((sumFourthPair / 2) % 2 == 0) {
    parityFourthPair = 'even'
}
else {
    parityFourthPair = 'odd'
}
console.log(parityFourthPair)
 */

















/* function calculateDiscount(promoCode) {

} */