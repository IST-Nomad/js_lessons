const plus = (x, y) => x + y;
const plusRes = plus(1, 2);
console.log(plusRes);

function plusFoo(x, y) {
    return x + y;
};

const withoutArgs = () => console.log('Hello world!');
const singleArgs = x => x*2;

const moreActions = (a, b) => {
    a *=2;
    b *=3;
    return a + b;
};

const returnObj = (str = '') => ({
    value: str,
    length: str.length,
});

// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

  
const sum = (...allArguments) => {
 
    if (!allArguments.length) return 0;
 
    return allArguments.reduce((prev, next) => prev + next);
}
 
console.log(sum());
console.log(sum(1, 2, 3, 4));


// 2. Переделать функцию с использованием функции-стрелки

const convertToObject = (num) => ({
      value: num,

      isOdd: Boolean(num % 2)

  });



