function every(arr, fn) {
  let result = true;
  if (!Array.isArray(arr)) {
    result = new Error("Not an array");
  } else if (typeof fn !== "function") {
    result = new Error("Not a function");
  } else {
    for (let i = 0; i < arr.length; i++) {
      result = fn(arr[i], i, arr);
    }
  }
  return result;
}
console.log(every([6, 7, 8], comparison));
function comparison(el, index, arr) {
  let a = true;
  if (el > 5 && Array.isArray(arr) && index > 0) {
    a = true;
  } else {
    a = false;
  }
  return a;
}

console.log(every([6, 7, 8], comparison));
console.log(every([10, 20, 30], "comparison"));
console.log(every("1, 2, 3, 4", comparison));
