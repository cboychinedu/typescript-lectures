"use strict";
// Create a class of type person in typescript 
class Person {
    // Creating a constructor to initialize the properties
    constructor(name, age, year) {
        this.name = name;
        this.age = age;
        this.year = year;
    }
    // Creating a method to display the person's details
    greet() {
        // Displaying the name and age of the person
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Creating instances of the Person class and calling the greet method
let person1 = new Person("Alice", 30, 1996);
person1.greet();
// Creating another instance of the Person class
let person2 = new Person("Bob", 25, 2010);
person2.greet();
