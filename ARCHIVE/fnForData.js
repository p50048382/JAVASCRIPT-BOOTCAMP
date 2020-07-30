// * Array callback Methods
// * 1. forEach Method
const numbers = [22,23,24,34,45,234,23,12];
numbers.forEach(function(num){
    // console.log(num * 2);
})

function printTriple(n){
    // console.log(n * 3);
}
numbers.forEach(printTriple);//*reusable function 

// * Map Function : It is used to create a new array out of an array. It can also be used to duplicate an array
const texts = ['Hello','Rowden','Atif','Jane',"Aungkey"];
const caps = texts.map(function(t){
    // return t.toUpperCase();
    return t ; //* For copying an array
})
// console.log(caps);
const double = numbers.map(function(n){
    return {
        value:n,
        isEven : n % 2==0
    };
})
// console.log(double);
const splits = texts.map(function(t){
   return t.toUpperCase().split('').join('.');
})
// console.log(splits);
// * Array reduce(): Executes a reducer function on each element of array resulting in a single. Like finding the max value in an array, tallying data in an objects or array
const nums = [3,4,5,6,7];
const totalMultiply= nums.reduce(function(total,curr){
    return total * curr;
});

const grades = [43,23,54,65,767,85,343,2345,34,343,34];
const maximum= grades.reduce((max,num)=>{
    if(max>num)
        return max;
     return num;

})
const minimum= grades.reduce((min,num)=>{
    return Math.min(min,num);
    
})
const sum =  [10,20,30,40,50].reduce((sum,currVal)=>{
    return sum + currVal
},100)

const votes = ['y','n','y','n','y','n','n','n','y','y','absent','n','n','y','n','y','n',];

const results = votes.reduce((tally,currVal)=>{
    // if(tally[currVal]) {
    //     tally[currVal]++;
    // }else {
    //     tally[currVal]=1;
    // }
    // * Same can be written as 
    tally[currVal]=(tally[currVal] || 0)+1;
    return tally;
},{})

