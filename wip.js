/*N*O*T*E*S F*R*O*M C*A*N*V*A*S*/

//CALLBACKS
//Alslo known as F: PROGRAMING
//All F: are first class citizen. You can store a F: as a variable as
//pass it around like any other variable
//F: can be passes as a parameter to another function
//F: are a set of instruction to complete a task
//F: are a primitive liek Bool, String, Numbex`rs

//+++EXMAPLE+++
/*
const functionFeeder = function(callback){//only param is a callback, and when this function runs, it will execute that CALLBACK, & pass the the HELLO string
    callback("Hello from the inside of Function Feeder");
};

functionFeeder(function(greeting){//invoke function, this exmpl is passing an ANNONIMUS F: as that CALLBACK parm. Also its passing a string, GREETING, which becomes the HELLO strong, at the time the F: runs.
    console.log(greeting);
});

//Hellow fromt he inside of Fucntion Feeder
*/
//--------------------------------------------------------

//+++EXAMPLE+++
/*
function sayHello(name){
    console.log(`Hello, ${name}`);
}
//Exmaple F: sayHello will be passed as a CALLBACK

function callSayHelloWithLars(callback){//<-- That callback will be the F: sayHello
    const innerName= "Lars";
    callback(innerName);//This will feed LARS into F: sayHello
}
//Invoke 2nd F:
callSayHelloWithLars(sayHello);
*/
//--------------------------------------------------------

//+++EXAMPLE+++

//Start with a array
/*
const elements = ["earth", "wind", "fire", "water"]
//In this exmp we start by looping over array
//For Loop
for( let i = 0; i < elements.length; i++){
    console.log(elements[i]);//this will print each element
}
*/
//Go bck and watch first video agaon


//ARRAY METHODS
//MAP FILTER REDUCE
//EVERYTHING YOU REVOLVES AROUND THE DATA DISPLAYED  
//THE BIGGER PIC IS FUNCTIONAL PROGRAMMING

//jASON DATE are Array's with object 

//.map
// - returns NEW ARRAY
// - calls back each element, index and return each in turn
// - used for manipulating or reshaping

//EXAMPLE
//starts with array below, and objective is to pull out the city & state info

const data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

// first case is w/o array method
 
const cityState = [];//declare a empty array to push info into
/*
for( let i = 0; i < data.length; i++){
    let mappedObj= {};
    mappedObj.city = data[i].city;
    mappedObj.state = data[i].state;
    cityState.push(mappedObj);
    mappedObj = {};//reset so that object get emptied out when loop is ran again
}
*/
//using .MAP -change or manipulate data

const mappedCityState = data/*array-name*/.map((state)=> {return {"city":state/*states referes to the object in the whatever turn the object is at*/.city,"state": state.state};
});

// console.log(mappedCityState)


//.FILTER
//gO BACK AND WATCH THE SECOND VIDEO


//----------------------------------------
//----------------------------------------
//----------------------------------------
//----------------------------------------
//----------------------------------------

//+++C*l*a*s*s N*o*t*e*s+++
//HIGHER ORDER F:

//creating some arrays

/*
let names = ["Tony", "Steve", "Bruce", "Peter"]
let powers = ["be sarcastic", "get old fast", "hulk out (sometimes)", "shoot webs"]

for ( let i in names){
    console.log(i)
}
*/

//it is iterating the declared variable let names
//shows "1" "2" "3"
//a for loop weakness if there is an empty value in an array
// a for In loop will skip empty values
// again, i is pulling the index value of array

/*
for ( let i in names){
    console.log(names[i]);
}
*/

//with the [i] now it pulls the actual names
//can you use with obj, yes, will go over later

/*
let listValues = (arr,callback) => {
     for(i in arr){
callback(arr[i]);
 }   
}

listValues(names,function(val){
    console.log(val);
})

listValues(powers,function(val){
    console.log(val);
})
*/


//return the listed names again
//the code flow starts with listeValues(name,fucntio...)
//f recieveing values is the higher order function

// 17 min into demo function is explain in depth 

/*
let listAllValues = (namesArray,powersArray,cb) => {
    for(i in namesArray){
      cb(`${namesArray[i]} can ${powersArray[i]}`)
    }
  }
  listAllValues(names,powers,function(val){
      //val is receiving the cb argument
    console.log(val);
  });
*/

// ++S*I*M*I*L*A*R T*O A*S*S*I*G*N*M*E*N*T++ 

  const heroData = [
    {"name":"Thor", "weapon":"mjolnir","weight":640, "height":78},
    {"name":"Iron Man", "weapon":"jarvis armor","weight":425, "height":78},
    {"name":"Wonder Woman", "weapon":"lasso of truth","weight":165, "height":72},
    {"name":"Spiderman", "weapon":"web shooters","weight":167, "height":70}
  ]

//   console.log(heroData[1].weapon)

  //for each- is a higher order f:

  /*
  heroData.forEach(function(hero,ind){//loop built into it
  //it will run a f: inside the array
  //first the value, then the index position
    console.log("Heor at index #" + ind + "- Name:" + hero.name + "| weapon:" + hero.weapon);
  })
  */

//hero resolved into heroData[0]; it recieved the array
//52 min into the demo
//you can also use a declared fucntion

/*
console.log("Another Example---------------")

let str = "";
function howBigTall(hero, index){
    str += `${hero.name} has an index position of ${index}, weights ${hero.weight} lbs, and is ${hero.height} tall \n`;
}
heroData.forEach(howBigTall);
console.log(str)
//57 min into 

*/

//.MAP
//will loop through in the array
//vs for each thay just loops, map goes in an returns a whole new array
//you need to RETURN

let heroes = heroData.map(function(hero){
    return hero.name;

})

//CREATING NEW ARRAY AND STORING IT IN HEROES 
//eXMP just pulls out name

console.log(heroes);
console.log(heroes[1]);//this console logs the new array, index 1 which is iron man
//above is an ann function

console.log("Another Example---------")

//using a declared fucntion with this example instead
// when to use, if f is used multiple times by diff things ann
// when used just once you can use as declared

/*
function double(hero){
    return hero.weight * 2;
}

let doubleWeight = heroData.map(double);
console.log(doubleWeight);
console.log(doubleWeight[0]); // your pulling from the newly created array for [index]
*/
//arrow function work best for anon F:
//function (){} is the same as ()=>{}
// 1H33 GOES OVER COMPOUND OPERATIRS 


//.FILTER
/*
let heavyHeroes = heroData.filter((hero) =>{
    return hero.weight > 400;
})

console.log(heavyHeroes);//if you want to create an array on a condition you want filter
//again, puts thing in an array with a condition
console.log(heavyHeroes[1].name);//print iron man

console.log("Another Example-----")

//using delcared function
function checkHeight(hero){
    return hero.height <= 72;
}
let shortHeroes = heroData.filter(checkHeight);
console.log(shortHeroes);
*/

//combine array methods

//map and filter
/*
let tallHeroes = heroData.filter((hero)=>{
    return hero.height > 72;
})
console.log(tallHeroes);//just to see if its working 
//now apply an advance array method on the new array

let heroNames = tallHeroes.map(function(hero){
    return hero.name;
})
console.log(heroNames);
//1h42 using end of using two methods
*/

//.reduce
//reduces down to something like a string or number
//needs two param to work
//1st. an accumulator/ a compound operator
//reduce has a built in operator (+=)
//define operator in the 1st param
//second param, where do i start counting, normally 0
//this is looping through the array and keeps adding the weight from 0

let totalWeight = heroData.reduce(function(counter,hero){
    console.log("Counter is currently at: " + counter);
    console.log("Weight added to counter is " + hero.weight);
    return counter + hero.weight;
  },0)
  console.log("Total weight is " + totalWeight)

 //Counter is currently at: 0
 //Weight added to counter is 640
 //Total weight is 1397

 //to udnerstand reduce, we have a counter variable, which is the start posotion, 
 //end of reduce demo is 1:53

 let namesWeapons = heroData.reduce(function(str,hero){
     return str + `${hero.name} uses ${hero.weapon}.\n`;
 },"");//on this one we are not dealing with number, 0 would not make sence; so we tell it start at an empty ""

 console.log(namesWeapons);

 //final notes: where you see item, think i in for loop, it can be anything, its the iterator 


 //Notes by Brit 
 const places = [
    {city: 'Tel Aviv', country: 'Israel', region: 'Middle East', rating: 10 },
    {city: 'Toronto', country: 'Canada', region: 'North America', rating: 6 },
    {city: 'Ubud', country: 'Indonesia', region: 'South Asia', rating: 9 },
    {city: 'Kyiv', country: 'Ukraine', region: 'Europe', rating: 8 },
    {city: 'Bogota', country: 'Colombia', region: 'South America', rating: 10 },
    {city: 'Roxboro', country: 'USA', region: 'North America', rating: 4 },
    {city: 'Amman', country: 'Jordan', region: 'Middle East', rating: 7 },
    {city: 'Santiago', country: 'Chile', region: 'Central America', rating: 3 }, 
  ];
  
  
  // .map()
  // used for converting data
  // will return a new array 
  // does not manipulate the original 
  // it requires a return statement 
  
  const smallCityNames = places.map(function(item){
    // whatever I return here gets pushed to my new array
    return item.city.toLowerCase();
  });
  
  // console.log(smallCityNames);
  
  //filter 
  // used for filtering data based on something that can be either true or false 
  // automatically returns a new array 
  // return statement is required 
  // if it's true, it will be included in the new array, if it's false it will be excluded
  
//   const middleEast = places.filter(function(item){
//     return item.region === 'Middle East';
//   });
  
  // console.log(middleEast);
  
  
  // reduce 
  // it does not return an array, it returns a single value
  // usually used to sums and products
  // it can be used for anything! 
  // 2 required params - accumulator / item
  // starting point - initial value - if you are adding that will likely be 0, if you are multiplying it will likely be 1
  // requires a return 
  
  
//   const totalRating = places.reduce(function(acc, item){
//     console.log(`I am the accumulator ${acc}`);
//     console.log(`I am the current value ${item.rating}`);
//     return acc + item.rating;
//   },0);
  
//   console.log(`I am the total value ${totalRating}`);

  //END NOTES BY BRIT