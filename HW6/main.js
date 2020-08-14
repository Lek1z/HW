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
        const sum = document.querySelector("h1");
        if (this.numbOfProd === 0) {
            basket.innerText = "Корзина пуста";
        } else {
            basket.innerHTML = " ";
            sum.innerText = "Сумма " + this.fullPrice + " руб.";
            this.products.forEach(element => {
                basket.appendChild(element);
            });
        };
    },
};

basketObj.content();
const buy = document.querySelectorAll(".buy");
buy.forEach(element => {
    element.addEventListener("click", function() {
        element.setAttribute("style", "display: none");
        const product = element.parentNode;
        const price = product.querySelector("span");
        const productPrice = +price.innerHTML;
        basketObj.newProduct(product, productPrice);
    })
    
});