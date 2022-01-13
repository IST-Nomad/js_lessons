let item = { name: 'Intel core i7', price:'100$', discount: '15%' };
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);
if (!isNaN(price) && !isNaN(discount)) {
  item.priceWithDiscount = price - (price * (discount / 100));
  console.log(item.priceWithDiscount)
} else {
  console.log(price);
}
console.log(item)

let product = {
    name: "Яблоко",
    price: "10$"
  };
  
  const productPrice = parseFloat(product.price);
  
  let min = 10;
  let max = 20; 
  
  if (productPrice >= min && productPrice <= max) {
    console.log(product.name);
  } else {
    console.log('Товаров не найдено');
  };