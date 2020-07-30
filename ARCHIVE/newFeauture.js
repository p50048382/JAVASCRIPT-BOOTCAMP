// * Default parameters: If a developer doesnt pass an argument we want have a default value for that parameter.
// Earlier way
function Multiply(x,y){
    if(typeof x ===''){
        y=1;
    }
    return x * y;
}
// Another way
function multiply1 (x,y){
    y = typeof y === 'undefined' ? 1:y;
    return x * y;
}
function multipy2(x,y=1){
return x * y;
}

const greet = (person,greeting="Greetings")=>{
    alert(`${greeting} Mr. ${person.toUpperCase()}!!`);
}

// * Order absolutely matter 
const blah = (x,y=[1,2,3])=>{
    console.log(x,y);
}

// * 1. Spread for functions : It has to do with expanding of the iterables into some other place
function gievMeFour(a,b,c,d){
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
    console.log('d',d);
}

const cephalopods = ['dumbo coctopus', 'humbldt squid', 'flaamboyant cuttlefish'];
const gastropods = ['giant african snail','banana slug','variable neon slug']
const cnidaria = ['fire coral','moon jelly'];

const mollusca = [...cephalopods];

// * Spread in object literals
const feline = {
    legs : 4,
    family: "Felidae"
}

const canine = {
    family:'Caninae',
    furry: true,
    legs:3
}

const dog ={
    ...canine,
    isPet:true,
    adorable: true,
}

const cat ={
    ...feline,
    isGrumpy: true,
    personality:"Unpredictable"
}
// *Order matters very much if we have conflicting properties name
const catDog={
    ...canine,
    ...feline,
    ...canine,
    legs:5
}

const catDogClone = {
    ...catDog
}
// const ArraySpreader = [...catDog];//*This will give us an error.
const ObjectSpreader = {...[1,2,3,4,5,]}//* But this one will work fine.
const ArraySpreader = [...Object.keys(catDog)];
const ArraySpreader2 = [...Object.values(catDog)];

function sum(){
    // console.log(arguments);
    // const total = arguments.reduce((sum,nextVal)=>{
    //     return sum+nextVal;
    // });
    // console.log(total);
    let args = [...arguments];
    const total = args.reduce((sum,nextVal)=>{
        return sum+nextVal;
    });
    console.log(total);
}
// *The above function doeosnt work because arguments is not an array. Its an array like object. Also arguments isnt a thing in arrow function.

// * Rest parameters: Rest is ... just like we use for spreads, It collectrst all the arguments into an array
function restSum(...nums){
    return  nums.reduce((total,CurVal)=>{
        return total + CurVal;
    });
    // console.log(total);
}
// *It can be used to collect the remaining arguments
function fullName(first,last,...args){
    args.unshift(first,last);
    console.log(args);
}

const multiply3= (...nums)=>{
    return  nums.reduce((total,CurVal)=>{
        return total * CurVal;
    });
    // console.log(total);
}
// * Destrucuring of arrays or objects: Its a nice clean way of unpack values from data structure.
const raceResults = [
    'Jeff Bezos',
    'George Bush',
    'GRR Martin',
    'Olie Pope',
    'Barack Obama',
    'John Kerry'
];
// *The old way
// const gold = raceResults[0];
// const silver= raceResults[1];
// const bronze = raceResults[2];
// [gold,silver,bronze]=[null,undefined,'Irfan']
const [gold,silver,bronze,]=raceResults;
const [first,,,fourth]=raceResults;
const [winner,,...others]=raceResults;
// * Destructuring objects;
const runner = {
    firstName: "Dilshad",
    lastName: "Ahmad",
    country: "USA",
    title:'King of Texas'
};

// const {firstName,lastName,time}=runners;
// Changing the name 
// const {country: Nation,title:Honour}=runners;
// const {firstName,lastName,...other}=runners;

function print({firstName,lastName}){
    console.log(`${firstName}-${lastName}`)
}