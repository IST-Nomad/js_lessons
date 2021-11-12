const names = ["Denis", "Ivan", "Maks", "Olga"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  //   console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);

// console.log(result2);

function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}

// const testGreeting = greeting("Denis");
// const fullName = testGreeting("Petrov");

const fullName = greeting("Denis")("Petrov");
console.log(fullName);

function question(job) {
    const jobDictionary = {
        developer: 'что такое JavaScript?',
        teacher: 'какой предмет ведете?'
    };
  
    return function (name) {
      return `${name}, ${jobDictionary[job]}?`;
    };
}

const developerQustion = question("developer");
console.log(developerQustion("Denis"));
const teacherQustion = question("teacher");
console.log(teacherQustion("Denis"));
