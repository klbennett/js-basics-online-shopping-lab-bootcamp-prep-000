let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

let newObj = {};
function addToCart(item) {
  newObj.name = item;
  newObj.price = Math.floor(Math.random()*101);
  cart.push(newObj);
  return `${item} has been added to your cart.`;
}

var cartBegin = "In your cart, you have ";
var i = "";

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  else if (cart.length > 0) {
    while (i = 0, i < (cart.length - 1), i++) {
      var contents = `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`;
      cartBegin += contents;
    }
    cartBegin.push(` and ${cart.item[cart.length-1]} at ${cart.price[cart.length-1]}.`)
    return cartBegin;
}

{ 
  
  
}
}

function total() {
  if (cart.hasOwnProperty(price)) {
    thePrice += cart[price];
    return thePrice;
}
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
