const shopingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add "Meat" at the beging if not already added

if (!shopingCart.includes("Meat")) {
  shopingCart.unshift("Meat");
}

console.log(shopingCart);
