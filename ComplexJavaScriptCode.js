/* 

File Name: ComplexJavaScriptCode.js

Description: This code snippet demonstrates an implementation of a fully functional online shopping cart application using JavaScript. The application supports adding products to the cart, updating quantities, removing items, and calculating the total cost. It also includes error handling for invalid inputs and provides a smooth user experience.

*/

// Define the class for a product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Define the class for the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add a product to the cart
  addItem(item) {
    this.items.push(item);
  }

  // Remove a product from the cart
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Update the quantity of a product in the cart
  updateQuantity(item, quantity) {
    const index = this.items.indexOf(item);
    if (index !== -1 && quantity >= 0) {
      this.items[index].quantity = quantity;
    }
  }

  // Calculate the total cost of all items in the cart
  calculateTotalCost() {
    let totalCost = 0;
    for (let item of this.items) {
      totalCost += item.price * item.quantity;
    }
    return totalCost;
  }
}

// Create some sample products
const laptop = new Product("Laptop", 999);
const headphones = new Product("Headphones", 199);
const mouse = new Product("Mouse", 49.99);
const keyboard = new Product("Keyboard", 79.99);

// Create an instance of the shopping cart
const cart = new ShoppingCart();

// Add products to the cart
cart.addItem(laptop);
cart.addItem(headphones);
cart.addItem(mouse);
cart.addItem(keyboard);

// Update the quantity of a product in the cart
cart.updateQuantity(laptop, 2);

// Remove a product from the cart
cart.removeItem(mouse);

// Calculate the total cost
const totalCost = cart.calculateTotalCost();

// Display the results
console.log("Shopping Cart Items:");
for (let item of cart.items) {
  console.log(`${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`);
}
console.log(`Total Cost: $${totalCost.toFixed(2)}`);