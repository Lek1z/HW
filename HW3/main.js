// Задание 1

let a = 0;
while (a <= 100) {
    let b = 2;
    while (b < a) {
        if (a % b === 0) {
            break;
        }
        b++
    }
    if (a === b) {
        console.log(a);
    }
    a++;
}

// Задание 2, 3

let basket = [1,2,3,4];
let basket_price = 0;
function countBasketPrice(x) {
    basket.push(x);
    for (i=0; i<basket.length; i++) {
        basket_price = basket_price + basket[i];
    }
    console.log(basket_price);
}
countBasketPrice(5);