// const names = ["Denis", "Ivan", "Maks", "Olga"];

// function mapArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLength(el) {
//   console.log(el);
//   return el.length;
// }

// function nameToUpperCase(el) {
//   return el.toUpperCase();
// }

// const result = mapArray(names, nameLength);
// const result2 = mapArray(names, nameToUpperCase);

// console.log(result2);

// function greeting(firstName) {
//   return function (lastName) {
//     return `Hello, ${firstName} ${lastName}`;
//   };
// }
//
// const testGreeting = greeting("Denis");
// const fullName = testGreeting("Petrov");

// const fullName = greeting("Denis")("Petrov");
// console.log(fullName);

// function question(job) {
//     const jobDictionary = {
//         developer: 'что такое JavaScript?',
//         teacher: 'какой предмет ведете?'
//     };

//     return function (name) {
//       return `${name}, ${jobDictionary[job]}?`;
//     };
// }

// const developerQustion = question("developer");
// console.log(developerQustion("Denis"));
// const teacherQustion = question("teacher");
// console.log(teacherQustion("Denis"));

// 1. firstFunc(['my', 'name', 'is', 'Trinity'], handler1) → "New value: MyNameIsTrinity"

function firstFunc(arr, fn) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return `New value: ` + `${res.trim()}`;
}

function handler1(el) {
  return "" + el[0].toUpperCase() + el.slice(1);
}
console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));
// 2. firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

function handler2(el) {
  return ` ${el * 10},`;
}
console.log(firstFunc([10, 20, 30], handler2));
// 3. firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”

function handler3(el) {
  return ` ${el["name"] + " is " + el["age"]},`;
}
console.log(
  firstFunc(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  )
);
// 4. firstFunc(['abc', '123'], handler4) → “New value: cba, 321,” - строки инвертируются

function handler4(el) {
  console.log(el);
  return ` ${el.split("").reverse().join("")},`;
}
console.log(firstFunc(["abc", "123"], handler4));
