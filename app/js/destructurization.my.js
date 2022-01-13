// const user = {
//     firstName: 'Denis',
//     lastName: 'Petrov',
//     age: 25,
//     info: {
//         work: 'PSB',
//         skills: ['html', 'css'],
//     }
// };

// const firstName = user.firstName;
// const lastName = user. lastName;

// const {firstName: name, lastName, age = 30} = user;
// const {
//     info: {work},
// } = user;
// console.log(work);

// const colors = ['white', 'black', 'red'];
// const [w, b, red] = colors;
// console.log(w, b, red);

// const names = ['Denis', 'Ivan', 'Maksim'];
// const [, name2, name3] = names;
// console.log(name2, name3);

// const nestedArr = ['hello world', ['key', 'value']];
// const [, [key, value]] = nestedArr;
// console.log(key, value);

// const names1 = ['Denis', 'Ivan', 'Maksim'];
// const [name1, ...otherNames] = names1;
// console.log(name1, otherNames);

// const [...newNames] = nam// console.log(colorNames);es;
// const newNames = [...names];
// console.log(...newNames);

// const colorNames = [...colors, ...names];


// const newUser = { ...user, age: 30 };
// console.log(newUser);

// const {info: {
//     skills: [html, css]
//     },
// } = newUser;
// console.log(html, css)

// function myPerson({lastName, firstName} = {}) {
//     console.log(lastName, firstName);
// }
// myPerson(newUser);

// function foo(x, y) {
    // console.log(arguments);
    // console.log([].slice.call(arguments));
//     const [...args] = arguments;
    // console.log(args);
// }
// foo(1, 2);
// const numbers = [2, 3];
// function foo2(x, y) {
    // console.log(x, y)
// }
// foo2(...numbers);

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

// function foo4(a, ...b) { 
//     return {first: a, other: b}
// }
// console.log(foo4(1, 2, 3, 4));

// 2.  Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {  
//   name: 'Google',   
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook


// const organisation = {  
//       name: 'Google',   
//       info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };

// function getInfo({name = 'Unknown', info: {partners: [a,b]}}) {
//    return {name, partners : [a,b]};
// }

// console.log(getInfo(organisation));

// 3. Дан объект:

let user = {
    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
    "isActive": false,
    "balance": "$2,474.46",
    "age": 30,
    "eyeColor": "blue",
    "name": "Tameka Maxwell",
    "gender": "female",
    "company": "ENOMEN",
    "email": "tamekamaxwell@enomen.com",
    "phone": "+1 (902) 557-3898",
    "tags": ["aliquip", "anim", "exercitation", "non",],
    "friends": [
      {"id": 0, "name": "Barber Hicks"},
      {"id": 1, "name": "Santana Cruz"},
      {"id": 2, "name": "Leola Cabrera"}
        ],
  };


// Используя деструктуризацию получить значения из следующих полей

// 1. name,  balance, email

// 2. из массива tags получить первый и последний элемент

// 3. из массива friends получить значение поле name из первого элемента массива

// Если какое то из полей не имеет значения то подставить значение по умолчанию.

// const {name: name, balance: balance, email: email} = user;
// console.log(name, balance, email);
// const {tags: [elFirst, , , elLast]} =user;
// console.log(elFirst, elLast);
// const {friends: [{id, name = "Ivan"}, b, c]} = user;
// console.log(name);

// 4. С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

const {tags, friends} = user;
const newArr = [...tags, ...friends];
console.log(newArr);