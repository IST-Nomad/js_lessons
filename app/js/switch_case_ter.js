let sw1 = 'none';
switch (sw1) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}


let ter1 = 'visible';
ter1 = ter1 === 'hidden' ? 'visible' : 'hidden';
console.log(ter1);

let ter2 = 2;
ter2 = ter2 === 0 ? 1 : ter2 < 0 ? 'Меньше нуля' : ter2 *= 10;
console.log(ter2);