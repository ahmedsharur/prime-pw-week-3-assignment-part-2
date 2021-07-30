console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
for (let i = 0; i < 6; i++){
  console.log(i);
}
//   - Which part of the example loop do you need to change to do this?
// We need to change the condition part. Instead of i < 4, we should make i < 6

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
console.log('count from 3 to 5');
for (let i = 3; i < 6; i++){
  console.log(i);
}
//   - Which part of the example loop do you need to change to do this?
// We need to change the variable initialization and make it i = 3, instead of i = 0. We also need to change the condition and should make it i < 6 instead of i < 4;

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 0; i < 11; i+=2){
  console.log(i);
}
//   - Which part of the example loop do you need to change to do this?
// We need to change the condition part. Instead of i < 4, we should make it i < 11. We also need to add 2 in the increment part and should make it i +=2 instead of i++, because it is even numbers.

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >= 0 ; i--){
  console.log(i);
}
// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let star of stars){
  console.log(star);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let x = 0;
while (x < stars.length){
  console.log(stars[x]);
  x++
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let i = 0;
while(i < 6){
  console.log(i);
  i++
}


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let j = 10;
while(j >= 5){
  console.log(j)
  j--
}
