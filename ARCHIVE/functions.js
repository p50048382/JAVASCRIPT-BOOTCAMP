// * FUnction expression ANother way of defining a function THis function is stored in a variable. Since javascript functions are object we can put them in a variable. So we can pass them as arguments
const sum = function (x,y){
    return x+y;
}
sum(3,4);
// *Named function. The above one was anonymous function 
const products = function Products(x,y){
    return x * y;
}

// HIgher Order Functions functions as objects
function add(x,y){
     return x + y;
}
 const subtract=  function (x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
const divide =  function (x,y){
    return x / y;
}
const operations =[
    add,
    subtract,
    divide,
    multiply
]

for (const func of operations) {
//    console.log( func(50,25))
   let results= func(50,25);
//    console.log(results);
}

const things = {
    doSomething:multiply
}
things.doSomething(5,5);

// * Higher Order functions: A function that returns a function or operate on a function
function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("BOO HOO I AM SO SAD!!");
}
function rage(){
    console.log("I HATE EVERYTHING!!");
}
// callThreeTimes(cry);
// callThreeTimes(rage); //*This was a callback function which means call the same function which is being passed as arguments

function repeatNTimes(action,num){
    for (let index = 0; index < num; index++) {
        action(); 
    }
}

// repeatNTimes(cry,13);
// repeatNTimes(rage,5);
function pickOne(f1,f2){
    let rand = Math.random()
    console.log(rand);
    if(rand<0.5){
        f1();
    }
    else f2();
}
//* pickOne(cry,rage);

// Functions as return values
function multiplyBy(num){
    // const f = function (x){
    //     console.log("HIIIs");
    // }
    // return f;
    return function (x){
        return x * num;
    }
    // return f;
}

 const triple = multiplyBy(3);
 triple(5);//15
 const double = multiplyBy(2);
 double(8); //16
 const halve = multiplyBy(0.5);
 halve(4);
// * So function are just values which can be passed around in to other functions as arguments or from function as a return value. Here the lexical Scope works. num is defined in a parent function but it is available to the child function.

function makeBetweenFunc(x,y){
    return function(num){
        // *Old way
        // if(num>=x && num<=y){
        //     return true;
        // }
        // else return false;
        // *A better way
        return num>=x && num<=y;
    }
}

 const isChild= makeBetweenFunc(0,18);
 isChild(16);
 isChild(20);

 const isNineties = makeBetweenFunc(1990,1999);
 isNineties(1998);
 isNineties(2000);

 const isWeatherNice = makeBetweenFunc(18,30);

 isWeatherNice(23);
 isWeatherNice(17);

//  *Callback FUnctions 
// * A callback function is a function which is passed as an argument and called when the function taking the 
function callTwice(func){
    func();
    func()
}
//  callTwice(laugh);
function laugh (){
    console.log("HAHAHAHAH HAHA !!");
}
// * Callbacks are important because these can be passed to other function. So when we are calling any api it will take time so we can assign a callback function when the api call is done.

// Anonymous function 
// setTimeout(grumpus,5000);
function grumpus(){
    alert("Gaah!! GO AWAY!!")
}
// * IF we dont want to make it a reusable function then we can call grumpus
// setTimeout(function(){
//     alert("GAAH BACK OFF !")
// },2000)

// Hoisitng 
