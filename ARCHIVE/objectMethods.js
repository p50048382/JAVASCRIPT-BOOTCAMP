// *SHorthand object properties
const getStats = (arr)=>{
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((total,curVal)=>total+curVal);
    const avg = sum/arr.length;
    // return{
    //     max:max,
    //     sum:sum,
    //     min:min,
    //     avg:avg,
    // }
    // * The results will be same 
    return{
        max,
        sum,
        min,
        avg,
    }
}
const reviews = [4.5,4,3.6,2.4,4,2,3,4.9];
const stats = getStats(reviews);
// console.log(stats);
// * Computed Properties
const role = "host";
const person = 'Jools Holland'
const role2 = "Director"
const person2  = "James Franco"
// I want to make an object with variable having key same as variable name. In the below example the key will remain same which role it wont change to the value.
// *the below example will work
// const team={}
// team[role]=person
// team[role2]=person2
// * So how can we shorted above syntax
const team = {
    [role]:person,
    [role2]:person2,
    [1+5+3]:"Nine"
}
//* Long way of adding method
// const math ={
//     numbers:[1,2,3,4,5],
//     add: function(...args){
//         return args.reduce((total,curVal)=>total+curVal);
//     },
//     subtract: function(...args){
//         return args[0]-args[1];
//     },
//     divide: function(...args){
//         return args[0]/args[1];
//     },
//     multiply: function(...args){
//         return args.reduce((total,curVal)=>total*curVal);
//     }
//* Shorter way of defining the methods  This is what we use angular
const math ={
    numbers:[1,2,3,4,5],
     add(...args){
        return args.reduce((total,curVal)=>total+curVal);
    },
    subtract(...args){
        return args[0]-args[1];
    },
    divide(...args){
        return args[0]/args[1];
    },
    multiply(...args){
        return args.reduce((total,curVal)=>total*curVal);
    }
}
// *This keyword in JS
const person1 ={
first : "Dilshad",
last: "Ahmad",
nickName:"Hero",
fullname(){
    const {first,last,nickName}=this; //*Object destructuring
    return (`${first} ${last} AKA ${nickName}`);
},
printBio(){
    console.log(this);
    const fullName = this.fullname();
    console.log(`${fullName} is a person`);
},
laugh:()=>{
    console.log(this); //THe value of this here is window object because the this keyword doesnt work in 
    console.log(`${this.first} says HAHAHAHAHAH!!`);
}

}
// person1.printBio();
const printBio = person1.printBio;
// printBio(); //*This will give an error.

const annoyer = {
    phrases : ['Literally',"cray cray",'I cant even','totes','yolo','cant stop','wont stop'],
    pickPhrase(){
        const {phrases}=this;
        const idx = Math.floor(Math.random()*phrases.length);
        return phrases[idx];
    },
    start(){
        this.timerID = setInterval(()=>console.log(this.pickPhrase()),3000)
        // * The above code works fine because this keyword isnot an issue in arrow function While below code doesnt work
        // console.log(this);
        // setInterval(function(){
        //     console.log(this);
        //     console.log(this.pickPhrase())
        // },3000)
    },
    stop(){
        clearInterval(this.timerID);//*The timerId is added in the annoyer object and it can be called here to stop it.
        console.log("Phew thanks !!!!");
    }
}
// annoyer.start()
// annoyer.stop()

