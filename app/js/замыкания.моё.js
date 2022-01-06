function getFullName(firsrtName, lastName) {
    return function () {
        return `${firsrtName} ${lastName}`;
    };
}

const getname = getFullName('Denis', 'Petrov');
// console.log(getname());

function updateValuue(val) {
    let x = val;
    return function (num = 0) {
        return (x += num);
    };
}

const updVal = updateValuue(2);
const updVal2 = updateValuue(4);
// console.log(updVal(1));
// console.log(updVal(1));
// console.log(updVal(1));
// console.log(updVal(1));
// console.log(updVal2(2));
// console.log(updVal2(0));

function checkCred() {
    const login = 'test';
    const password = 'somePassword';

    return {
        checkLogin(value) {
            return login === value;
        },
        checkPassword(value) {
            return password === value;
        },
    }
}

const check = checkCred();
// console.log(check.checkLogin('test'));

function closureExample() {
    const arrOfFunc = [];
    let value = '';

    for (let i = 0; i < 10; i++) {
        value += i;
        arrOfFunc.push(function(){
            // console.log(value, i);
        });
    }
    return arrOfFunc;
}
const res = closureExample();
res[0]();
res[5]();


// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

function minus(first = 0) {
    return function num(second = 0) {
        return first - second
    }
}
// console.log(minus()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)


function multiplyMaker(num) {
    let x = num;
    return function subFunc(el = 0) {
        return x = x * el
    }
}
const multiply = multiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

// 3.  Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const strWorker = (function () {
    let newStr;
    function setString(str = '') { newStr = '' + str; }
    function getString() { return newStr; }
    function getLength() { return newStr.length; }
    function reverseString() { return newStr.split('').reverse().join(''); }
 
    return {
        setString: setString,
        getString: getString,
        getLength: getLength,
        reverseString: reverseString,
    };
})();
 
strWorker.setString("abcde");
// console.log(strWorker.getString());
// console.log(strWorker.getLength());
// console.log(strWorker.reverseString());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100



const calculator = (function () {
 
    let res;
 
    function setValue(val) {
        if (!val || typeof (val) !== 'number') { return console.log('Введите число') }
        res = val;
        return this;
    }
    function add(val) {
        if (!val || typeof (val) !== 'number') { return console.log('Введите число') }
        res += val;
        return this;
    }
    function mult(val) {
        if (!val || typeof (val) !== 'number') { return console.log('Введите число') }
        res *= val;
        return this;
    }
    function substr(val) {
        if (!val || typeof (val) !== 'number') { return console.log('Введите число') }
        res -= val;
        return this;
    }
    function divis(val) {
        if (!val || typeof (val) !== 'number') { return console.log('Введите число') }
        res /= val;
        return this;
    }
    function exponent(val) {
        if (!val || typeof (val) !== 'number') { return console.log('Введите число') }
        res = Math.pow(res, val);
        return this;
    }
    function getValue() {
        console.log(res = Math.round(res * 100) / 100);
        return this;
    }
    return {
        setValue: setValue,
        add: add,
        mult: mult,
        substr: substr,
        divis: divis,
        exponent: exponent,
        getValue: getValue,
    };
})();
 
calculator.setValue(1).add(5).mult(2).getValue();
 
calculator.setValue(3).exponent(2).getValue();