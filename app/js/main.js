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
// console.log(updVal(0));
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
            console.log(value, i);
        });
    }
    return arrOfFunc;
}
const res = closureExample();
res[0]();
res[5]();