// 20. In the following shopping cart add, remove, edit items,

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// add Sugar at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

// remove 'Honey'

const index = shoppingCart.indexOf("Honey");
if (index > -1) {
  // only splice array when item is found
  shoppingCart.splice(4, 1); // 2nd parameter means remove one item only
}
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

//modify Tea to 'Green Tea
const tea = shoppingCart.indexOf("Tea");
shoppingCart.splice(tea, 1, "Green Tea");
// shoppingCart[tea] = "Green Tea";
console.log(shoppingCart); //[ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
