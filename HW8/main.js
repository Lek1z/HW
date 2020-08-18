class Good {
    name = "";
    price = 0;
    count = 1;

    constructor (name, price) {
        this.name = name;
        this.price = price;
        this.goodsListContent();
    };

    inc() {
        this.count++;
    };

    dec() {
        this.count--;
    };

    goodsListContent () {
        const {price, name} = this;
        const block = document.createElement('div');
        block.classList.add('good');
        block.innerHTML = `
        <div class="good-name">Товар: <span>${name}</span></div>
        <div class="good-price">Цена: <span>${price}</span></div>
        `;
        block.appendChild(this.btnAdd());
        return block;
    };

    basketContent () {
        const {price, name, count} = this;
        const block = document.createElement("div");
        block.classList.add("basket");
        block.innerHTML = `
        <div class="cart-good">${name}: ${count} шт. X ${price} руб. = ${price * count} руб.</div>
        `;
        block.appendChild(this.btnMinus());
    };

    btnAdd () {
        const btn = document.createElement("button");
        btn.classList.add("btnAdd");
        btn.innerText = "Купить";
        btn.addEventListener("click", () => {
            const BasketInstance = new Basket();
            BasketInstance.addGood(this);
        });
        return btn;
    };

    btnMinus () {
        const btn = document.createElement("button")
        btn.classList.add("btnMinus");
        btn.addEventListener("click", () => {
            const CartInstance = new Cart()
            CartInstance.removeGood(this)
        });
        return btn;
    };
};

class List {
    goods = [];

    constructor (goods = []) {
        this.goods = goods;
    };

    addGood (good) {
        const exist = this.findGood(good);
        if (exist) {
            exist.inc();
        } else {
            this.goods.push(good)
        };
        this.render();
    };

    removeGood (good) {
        const exist = this.findGood(good);
        if (exist.count > 1) {
            exist.dec();
        } else {
            this.goods = this.goods.filter(item => item.name !== good.name);
        };
        this.render();
    };

    findGood (good) {
        return this.goods.filter(item => item.name === good.name)[0];
    };

    render () {
    };
};

class Basket extends List {
    constructor () {
        if (Basket._instance) {
            return Basket._instance;
          };
          super();
          this.content();
          Basket._instance = this;
    };

    content () {
        const block = document.createElement("div");
        block.classList.add("basket");
        const btn = document.createElement("button");
        btn.innerText = "Корзина";
        btn.classList.add("btn-basket");
        btn.addEventListener("click", () => {
            this.toggle();
        });
        const list = document.createElement("div");
        list.classList.add("basket-list");
        block.appendChild(btn);
        block.appendChild(list);
        const placeToRender = document.querySelector("nav");
        placeToRender.appendChild(block);
        this.render();
    };

    toggle () {
        const list = document.querySelector(".basket-list");
        list.classList.toggle("shown");
    };

    emptyBasket () {
        const block = document.createElement("div");
        block.classList.add("basket-empty");
        block.innerText = "Корзина пуста.";
        return block
    };

    totalSum () {
        const sum = this.goods.reduce((sum, good) => {
            return sum + good.price * good.count
          }, 0);
        const block = document.createElement("div");
        block.classList.add("basket-sum");
        block.innerText = `Суммарная цена: ${sum}`;
        return block;
    };

    render () {
        const placeToRender = document.querySelector('.goods');
        placeToRender.innerHTML = "";
        if (!this.goods.length) {
            placeToRender.appendChild(this.emptyBasket());
        } else {
            this.goods.forEach(good => {
                placeToRender.appendChild(good.basketContent);
            });
        };
        placeToRender.appendChild(this.totalSum());
    };
};

class GoodsList extends List {
    constructor () {
        super();
    };

    render () {
        const placeToRender = document.querySelector(".goods");
        placeToRender.innerHTML = "";
        this.goods.forEach(good => {
            const block = good.goodsListContent();
            placeToRender.appendChild(block);
          });
    };
};

const GoodsListInstance = new GoodsList();
GoodsListInstance.addGood(new Good("apples", 50));
GoodsListInstance.addGood(new Good("bananas", 75));
GoodsListInstance.addGood(new Good("pears", 100));
const BasketInstance = new Basket();
GoodsListInstance.render();