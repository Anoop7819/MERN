// let num={};
// num['name'] = 'John';
// num['age'] = 30;
// num['city'] = 'New York';
// num['country'] = 'USA';
// num['occupation'] = 'Engineer';
// num['language'] = 'English';
// num['hobby'] = 'Reading';
// num['favoriteColor'] = 'Blue';
// console.log(num["name"]);
// console.log(num["age"]);
// . operator 
// let student = {
//     name:"Anoop",
//     age:20,
//     city:"Bangalore"

// }
// student["subject"] = "Maths";
// delete student.city;
// console.log(student)

// let arr = [ {name:"Anoop", age:20},
// {name:"Yash", age:23},
// {name:"Vishal", age:25},
// {name:"Vikram", age:30}
// ]
// let sum = 0;
// for (let i=0; i<arr.length; i++){
//     sum += arr[i].age;
// }
// console.log(sum);

// const user = {
//     name: "Anoop",
//     age: 20,
// };
// const { name, age } = user;
// console.log(name ,age);


// updataion of object key value
// const user = {name: "Anoop", age: 20, city: "Bangalore"};
// const { name: userName, age: userAge, city: userCity }=user;
// console.log(userName, userAge, userCity);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObj = { a:1,b:2,obj2:obj1 };
// // console.log(mergedObj);
// const copy = {...mergedObj};
// copy.obj2.hello = "world";
// console.log(copy);
// console.log(mergedObj );


// create an object with the following properties: name , age , city  then use object destructuring to extract the each property into a separate variable.\
// const object = {name: "Anoop", age: 20, city: "Bangalore"};
// const { name: userName, age: userAge, city: userCity } = object;
// console.log(userName, userAge, userCity);

// given an array of numbers, use the array destructuring to assign the first two elements to variables and the rest of the elements to another array.
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// console.log(first, second, rest);

//create two objects and merge them into a new object using the spread operator
//  const object = {name:"anoop",age:20,city:"bangalore"}

let a ={}
let b=a;
console.log(a===b);
console.log(a==b);