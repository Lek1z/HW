// Задание №1

let chessBoard = document.querySelector(".chess_board");
let block;
let color = true;
let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
letters.forEach(letter => {
    block = document.createElement("div");
    block.className = "letter";
    block.innerText = letter;
    chessBoard.appendChild(block);
});
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (j === 0) {
            color = !color;
        };
        block = document.createElement("div");
        if (color) {
            block.className = "block black number";
        } else {
            block.className = "block number";
        };
        if (j === 0) {
            block.innerText = ++i;
            --i;
        };
        chessBoard.appendChild(block);
        color = !color;
    }
}

// Задание №2

const basketObj = {
    products: [],
    numbOfProd: 0,
    prices: [],
    fullPrice: 0,
    newProduct(product, price) {
        this.products.push(product);
        this.prices.push(price);
        this.countBasket();
    },
    countBasket() {
        this.fullPrice = 0;
        this.prices.forEach(price => {
            this.fullPrice += price;
        });
        this.numbOfProd = this.products.length;
        this.content();
    },
    content() {
        const basket = document.querySelector(".basket");
        if (this.numbOfProd === 0) {
            basket.innerText = "Корзина пуста";
        } else {
            basket.innerText = ("В корзине: " + this.numbOfProd + " товаров на сумму " + this.fullPrice + " рублей");
        };
    }
    };

basketObj.newProduct("apple", 50);
basketObj.newProduct("potatoe", 100);