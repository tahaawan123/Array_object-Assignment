//-----------------------------Assignment 1: Building Your Friend List------------------------------------------
var people = {
    friends: []
};
var friend1 = {
    firstName: "Muhammad",
    lastName: "Taha",
    id: 123
};
var friend2 = {
    firstName: "Awais",
    lastName: "Ali",
    id: 4444
};
var friend3 = {
    firstName: "Ayan",
    lastName: "Ali"
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
//-------------------------------Assignment 2:Manipulating an Array: Rearranging Words------------------------
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of
// GIAIC". Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC"
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(3, 4);
scrambledArray.splice(1, 0, "am", "a");
console.log(scrambledArray.join(" "));
//-----------------------------------  Assignment 3: Company Product Catalog-----------------------------------
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
//Define an array named inventory to store product information.
var inventory = [];
//Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
var product1 = {
    name: "watch",
    model: 2022,
    cost: 2000,
    quantity: 200
};
var product2 = {
    name: "iphone",
    model: 2023,
    cost: 100000,
    quantity: 100
};
var product3 = {
    name: "HP-Laptop",
    model: 2020,
    cost: 50000,
    quantity: 50
};
//Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1, product2, product3);
console.log(inventory);
// Access and log the quantity property of a specific product  in theinventory array.
console.log("Quantity of 2nd product is", inventory[1].quantity);
//Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
var product4 = {
    name: "Bracelet",
    model: 2024,
    cost: 1000,
    quantity: 1500
};
inventory.push(product4);
console.log(inventory);
;
var Students = [
    {
        name: "Taha",
        seniorStatus: true,
        hasCompletedAssignment: true
    },
    {
        name: "Ali",
        seniorStatus: false,
        hasCompletedAssignment: true
    },
    {
        name: "Ayan",
        seniorStatus: true,
        hasCompletedAssignment: true
    },
    {
        name: "Hadi",
        seniorStatus: true,
        hasCompletedAssignment: false
    },
];
// find the senior student  with using of filter method
var senior = function (Students) {
    return Students.filter(function (student) { return student.seniorStatus && student.hasCompletedAssignment === true; });
};
console.log("Senior Student", senior(Students));
//class list update remove student who haven't completed their Assignments
var updateList = function (Students) {
    return Students.filter(function (Student) { return Student.hasCompletedAssignment === false; });
};
console.log("Update list", updateList(Students));
