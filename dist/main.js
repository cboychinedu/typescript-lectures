"use strict";
const printName = (personData) => {
    // displaying the firstname and lastname 
    console.log(`${personData.first} and lastName: ${personData.lastName}`);
};
const objectP = {
    first: "Adams",
    lastName: "Smith",
};
// 
printName(objectP);
