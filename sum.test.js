//Write a function to sum two numbers
//Asumption-
//- need to ake two numbers in
//- return the sum of the inputs
//- should work for positive and negative numbers
//- should work for both integers and floats
//- non-numeric data types, try to conver to number-- if fails return NaN

//Test w/o library might look like this
const sum= require('./sum');

// console.log('Sum 1 and 1 should give 2', sum(1,1));

// test('Pass in two numbers should get sum of both as result',  () => {
//     expect(sum(1,1)).toBe(2);
//     expect(sum(1,2)).toBe(3);
// })

// test('Should work with positive and negative numbers',  () => {
//     expect(sum(1,-1)).toBe(0);
//     expect(sum(-1,-2)).toBe(-3);
// })

test('Should work with floats and ints',  () => {
    expect(sum(1, 0.03)).toBe(1.03);
    expect(sum(-1,-0.5)).toBe(-1.5);
})