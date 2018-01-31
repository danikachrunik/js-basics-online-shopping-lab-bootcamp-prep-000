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
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var message = "In your cart, you have ";
    for(let i = 0; i < cart.length; i++) {
      message += cart[i] + " at " + cart[i] + ", ";
    }
    message += ".";
    console.log(message);
  }
}

function total() {
  var total = 0;
  for(let i = 0; i < cart.length; i++) {
    
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
