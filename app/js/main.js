// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 4, 
    height: 4, 
    getSquare: function getSquare() {
        return parseFloat(this.width) * parseFloat(this.height)
    }
};
console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5


const price = {
    price: 10,
    discount: '15%',
    getPrice: function getPrice() {
        return parseFloat(this.price)
    },
    getPriceWithDiscount: function getPriceWithDiscount() {
        return parseFloat(this.price) - (parseFloat(this.price) * parseFloat(this.discount) / 100)
    }
};
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5


// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const mult = {
    height: 10,
    mag: function magMult() {
        return this.height + 1
    }
}
console.log(mult.height);
mult.mag();

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
    value: 1,
    double: function() {
    this.value *=2;
    return this;
    },
    plusOne: function() {
    this.value++;
    return this;
} ,
    minusOne: function minusOne() {
    this.value--;
    return this;
},
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);
   
  
   

// 5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const mag = {
    price: 5,
    count: 6,
    sum: function sum() {
         this.price * this.count;
         return this;
    }
};
console.log(mag.sum);



const detail = {
    price: 4,
    count: 3,
};
detail.sum();
console.log(detail.sum2);