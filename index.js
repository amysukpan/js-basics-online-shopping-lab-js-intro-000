var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var numItem=cart.length

  if (numItem!=0) {
      var listItem = "In your cart, you have "
      for (i=0;i<numItem;i++){
          if (let i==0)
              listItem += `${cart[i].itemName} at $${cart[i].itemPrice}`
          else
              listItem += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      listItem +='.'
  } else return "Your shopping cart is empty."
}

function total() {
  var totalprice=0
  for (i=0;i<cart.length;i++)
    totalprice += cart[i].itemPrice
  return totalprice
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  cart.itemName.indexof(item)
}

function placeOrder(cardNumber) {
  // write your code here
}
