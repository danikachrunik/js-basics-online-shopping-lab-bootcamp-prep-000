var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  let itm = {};
  itm[item] = Math.floor(Math.random()*100);
  console.log(`${item} has been added to your cart.`);
  cart.push(itm);
  return cart;
}

function viewCart() {
  
  var len = cart.length;
  
  if(len === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var message = `In your cart, you have `;
    for(let i = 0; i < len; i++) {
      message += `${}`;
    }
    message += `.`;
    console.log(message);
  }
}

function total() {
  
  var total = 0;
  var keys = Object.keys(cart);
  for(let i = 0; i < keys.length; i++) {
    total += cart.keys[i];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
