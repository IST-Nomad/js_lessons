const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);

value = numArr.push(100); // добвляет в конец
value = numArr.pop(); // удаляет с конца один элемент и возвразает его
value = numArr.unshift(111); // добавляет в начало
value = numArr.shift(); // удаляет с начала элемент
value = numArr.slice(0, 2); // берет элементы не изменяя массив начиная с 0 два элемента
value = numArr.splice(1, 2, "one", "two"); // вырезает с первого элемента два и добавляет "one" и "two", если второе значение 0 то просто добавляет
value = numArr.reverse(); // переварачивает массив
value = numArr.concat(1, 2); //
value = numArr.join(" "); // переводит массив в строку, элементы через пробел
value = "hello world".split(" "); // из строки в массив
console.log(value, numArr);
