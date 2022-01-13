let a = 0 || 'string'; //string

let a = 1 && 'string'; //string

let a = null || 25; //25

let a = null && 25; //null

let a = null || 0 || 35; //35

let a = null && 0 && 35; //null

let a = 12 + 14 + '12'; //2612

let a = 3 + 2 - '1'; //4

let a = '3' + 2 - 1; //31

let a = true + 2; //3

let a = +'10' + 1; //11

let a = undefined + 2; //NaN

let a = null + 5; //5

let a = true + undefined; //NaN