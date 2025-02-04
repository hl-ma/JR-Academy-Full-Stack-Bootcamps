// Create a shopping list array
const shoppingList = ["Milk", "Eggs", "Bread"];
console.log('Original List:', shoppingList);

// Add two items to the shopping list and output the updated list
shoppingList.push("Apples", "Oranges");
console.log('Updated List:', shoppingList);

// Remove the last item from the shopping list and output the result
shoppingList.pop();
console.log('List after removing last item:', shoppingList);

// Create a function that outputs "Your cart is full" if the shopping list contains more than 5 items
function checkShoppingList() {
    return shoppingList.length > 5 ? 'Your cart is full' : 'Your cart has less than 5 items';
}
console.log(checkShoppingList());

// Use a loop to iterate through the shopping list and output each item with a number
console.log('Shopping List:');
// for loop
for (let i = 0; i < shoppingList.length; i++) {
    console.log(i + 1, shoppingList[i]);
}
// forEach loop
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

// Create a function that takes an item name as a parameter and returns whether the item is in the shopping list
console.log('Checking if an item is in the shopping list:')
function checkItem(itemName) {
    return shoppingList.includes(itemName) ? 'Yes' : 'No';
}
console.log('Milk?', checkItem('Milk'));
console.log('Watermelon?', checkItem('Watermelon'));

// Create an object representing a shopping item, including name, price, and quantity
let item = {
    name: "Milk",
    price: 2.5,
    quantity: 1
};
console.log('Shopping Item Object:', item);