const shopingCart = ["Milk", "Coffee", "Tea", "Honey"];
//add "Meat" at the beging if not already added

if (!shopingCart.includes("Meat")) {
  shopingCart.unshift("Meat");
}

//Add 'sugar' at the end if not already added
if (!shopingCart.includes("Sugar")) console.log(shopingCart);
{
  shopingCart.push("Sugar");
}

// Remove 'Honey' if allergic
if (shopingCart.includes("Honey")) {
  shopingCart.splice(shopingCart.indexOf("Honey"), 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shopingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shopingCart[teaIndex] = "Green Tea";
}
console.log(shopingCart);
