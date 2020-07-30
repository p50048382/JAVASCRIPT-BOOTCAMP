// * Its heavily dependent on promises
// function getData(){
//     const data = axios.get('https://swapi.dev/api/planets/').then((data)=>{
//         console.log(data);
//     });
//     console.log(data);
// }

//* The asyc keyword
// function greet(){
        //retuns normal string
//     return "HELLOOOO!!!"
// }
// async function greet(){
//     return "HELLOOOO!!!"
//     // *Return a promise
// }
// greet().then((val)=>{
//     console.log("Promise resolved with ",val);
// })

// async function add(x,y){
//     if(typeof x !== 'number' || typeof y !=='number'){
//         // throw new Error("Kindly pass a number");
//         throw "X and Y must be numbers !!"
//     }
//     return x+y;
//     // * How to return a rejected promise?
// }
// add("Dislhad",4)
// .then(val=>console.log(val))
// .catch(error=>console.error(error))

// function getPlanets(){
//     return axios.get('https://swapi.dev/api/planets/')
// }
// getPlanets().then(res=>{
//     // console.log(res.data);
// })
// * The eeasier way to do it
// async function getPlanets(){
//   const res=  await axios.get('https://swapi.dev/api/planets1/')
//   console.log(res);
// //   return res;
// }
// getPlanets().catch(error=>{
//     console.log("In catch");
//     console.log(error);
// })
// *Error handling in async function
async function getPlanets(){
   try {
    const res=  await axios.get('https://swapi.dev/api/planets1/')
    console.log(res);
   } catch (error) {
       console.log("IN CATCH");
       console.log(error);
   }
  }
//   *Nicer way to do this
const btn = document.querySelector('button');
  const moveX = (element,amount,delay)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const bodyBoundary = document.body.clientWidth;
                const elRight = element.getBoundingClientRect().right;
                const currLeft = element.getBoundingClientRect().left;
                if(elRight + amount > bodyBoundary){
                    reject({
                        error: true,
                        message: "Not enough space left!!"
                    });
                }
                else {
                element.style.transform = `translateX(${currLeft+ amount}px)`;
                 resolve();
            }
        },delay)
        })
    }
    async function animateRight(btn,amt){
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
       await moveX(btn,amt,1000)
    }
    // animateRight(btn,100).catch(error=>{
    //     animateRight(btn,-100);    
    // });

//   *The below code can be written in a nicer way using async await
// const btn = document.querySelector('button');
// const moveX = (element,amount,delay)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const bodyBoundary = document.body.clientWidth;
//             const elRight = element.getBoundingClientRect().right;
//             const currLeft = element.getBoundingClientRect().left;
//             if(elRight + amount > bodyBoundary){
//                 reject({
//                     error: true,
//                     message: "Not enough space left!!"
//                 });
//             }
//             else {
//             element.style.transform = `translateX(${currLeft+ amount}px)`;
//              resolve();
//         }
//     },delay)
//     })
// }
// moveX(btn,100,2000)
// .then(()=>moveX(btn,100,1000))
// .then(()=> moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=> moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=> moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=> moveX(btn,100,1000))
// .then(()=>moveX(btn,100,1000))
// .then(()=> console.log("STOPPED!!"))
// .catch((err)=>
//     console.error(err.message)
// )

// *Parrallel vs Sequential call
// *This is SEQUENTIAL REQUEST
// async function get3Pokemon(){
//    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//    console.log(poke1)
//    console.log(poke2)
//    console.log(poke3)
// }
// get3Pokemon()

// *This is parallel request
// async function get3Pokemon(){
//        const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1')
//        const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2')
//        const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3')
//        console.log(prom1);
//        const poke1= await prom1;
//        const poke2= await prom2;
//        const poke3= await prom3;
//         console.log(poke1.data)
//         console.log(poke2.data)
//         console.log(poke3.data)
//     }
// get3Pokemon()
// *Difference between the two
function changeBodyColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}
//*In sequence 
// changeBodyColor('blue',1000)
async function lightBody(){
 await changeBodyColor('blue',1000)
 await changeBodyColor('pink',1000)
 await changeBodyColor('orange',1000)
 await changeBodyColor('indigo',1000)
 await changeBodyColor('violet',1000)
}

// *In parallel
// async function lightBody(){
//   const p1=changeBodyColor('blue',1000)
//   const p2=changeBodyColor('pink',1000)
//  const p3= changeBodyColor('orange',1000)
//   const p4=changeBodyColor('indigo',1000)
//   const p5=changeBodyColor('violet',1000)
//   await p1
//   await p2
//   await p3
//   await p4
//   await p5
// }

// lightBody()
// * Promise All method
async function get3Pokemon(){
    const prom1 =  axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const prom2 =  axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const prom3 =  axios.get('https://pokeapi.co/api/v2/pokemon/3')
    // console.log(prom1);
    // const poke1= await prom1;
    // const poke2= await prom2;
    // const poke3= await prom3;
    const results = await Promise.all([prom1,prom2,prom3]);
    //  console.log(results);
    printPokemon(results);
 }
 function printPokemon(results){
    for (const pokemon of results) {
        console.log(pokemon.data.name);
    }
 }
 get3Pokemon()