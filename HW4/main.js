// Задание 1

class Numb {
    'единицы';
    'десятки';
    'сотни';
    constructor (number) {
        this.единицы = number % 10;
        this.десятки = ((number - number % 10) / 10) % 10;
        this.сотни = ((number - number % 100) / 100) % 10;
    }
};

function fromNumbIntoObj(x) {
    if (x > 999) {
        console.log('Число больше 999');
        x = {};
    } else if (x < 0) {
        console.log('Число меньше 0');
        x = {};
    } else {
        x = new Numb(x);
    }
    console.log(x);
}

fromNumbIntoObj(245);
fromNumbIntoObj(37);
fromNumbIntoObj(9);
fromNumbIntoObj(1748);
fromNumbIntoObj(-24);

// Задание 2

class Product {
    name;
    price;
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
};

function countBasketPrice(name, price) {
    name = new Product(name, price);
    basket_price = basket_price + name.price;
    console.log('Сумма равна ', basket_price, ' руб');
    return basket_price;
}

let basket_price = 0;
countBasketPrice('apple', 25);
countBasketPrice('pizza', 75);