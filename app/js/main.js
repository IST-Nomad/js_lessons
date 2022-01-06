const user = {
    firstName: 'Denis',
    lastName: 'Petrov',
    age: 25,
    info: {
        work: 'PSB',
        skills: ['html', 'css'],
    }
};

// const firstName = user.firstName;
// const lastName = user. lastName;

// const {firstName: name, lastName, age = 30} = user;
// const {
//     info: {work},
// } = user;
// console.log(work);

const colors = ['white', 'black', 'red'];
const [w, b, red] = colors;
// console.log(w, b, red);

const names = ['Denis', 'Ivan', 'Maksim'];
const [, name2, name3] = names;
// console.log(name2, name3);

const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
// console.log(key, value);

const names1 = ['Denis', 'Ivan', 'Maksim'];
const [name1, ...otherNames] = names1;
// console.log(name1, otherNames);

// const [...newNames] = names;
const newNames = [...names];
// console.log(...newNames);

const colorNames = [...colors, ...names];
// console.log(colorNames);

const newUser = { ...user, age: 30 };
// console.log(newUser);

const {info: {
    skills: [html, css]
    },
} = newUser;
// console.log(html, css)

function myPerson({lastName, firstName} = {}) {
    console.log(lastName, firstName);
}
// myPerson(newUser);

function foo(x, y) {
    // console.log(arguments);
    // console.log([].slice.call(arguments));
    const [...args] = arguments;
    // console.log(args);
}
foo(1, 2);
const numbers = [2, 3];
function foo2(x, y) {
    console.log(x, y)
}
foo2(...numbers);