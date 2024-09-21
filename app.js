console.log('pea')

//Object Destructing 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//Object Destructuring 2
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); 
  //It will have two objects: yearNeptuneDiscovered: 1846
  // yearMarsDiscovered: 1659

  //Object Destructuring 3
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) 
  // Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) 
  // Your name is Meslissa and you like green. Originally forgot to check the initial value
  getUserData({}) 
  // Your name is undefined and you like green


  //Array destructuring 1
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//Array destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); 
  // Raindrops on roses
  console.log(whiskers); 
  // whiskers on kitens
  console.log(aFewOfMyFavoriteThings); 
  // ['Bright copper kittles', 'warm woolen mittens', 'Brown paper packages tied up with strings']



  //Array destructuring 3
  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]
//Originally forgot the index starts at 0. Quick fix

//ES2015 Refactoring
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

//My Answer:
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//I thought I had to separately have const a and const b. Quick fix
const {a, b} = obj.numbers

//ES5 array swap:
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//My answer: one-line array swap:
var arr = [1, 2]
[arr[0], arr[1]] = [arr[1], arr[0]]

//Race Results:
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
