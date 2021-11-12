function getArray(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

function doubleArray(arr) {
  let a = arr.concat(arr);
  return a;
}

function changeCollection() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    let a = arguments[i];
    a = a.slice(1, a.length);
    arr.splice(i, 0, a);
  }
  return arr;
}

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

function filterUsers(arr, key, value) {
  let result = [];
  for (let user of arr) {
    if (user[key] === value) {
      result.push(user);
    }
  }
  return result;
}

console.log(filterUsers(users, "age", 36));
