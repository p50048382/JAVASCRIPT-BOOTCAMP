//* Call Stack: This is how the JavaScript keep track which one function is being executed. This is how compiler knows at which line it is.
// const repeat = (str,times)=>{
//     let result='';
//     for (let index = 0; index < times; index++) {
//         result += str;        
//     }
//     return result;
// }
// const scream = (str)=>{
//     return (str.toUpperCase() + '!!!!! <br/>');
// }
// const getRantText = (phrase)=>{
//     let text = scream(phrase);
//     let rant = repeat(text,9);
//     return rant;
// }
// const makeRant = (phrase,el)=>{
//     const h1 = document.createElement('h1');
//     h1.innerHTML = getRantText(phrase);
//     el.appendChild(h1);
// }
// makeRant('I hate Kissu',document.body);
// makeRant('Kissu should be quarantined',document.body);
// *JS is single threaded

// console.log("I HAPPEN FIRST!")
// setTimeout(function(){
//     console.log("I HAPPEN THIRD!!")
// },3000)
// console.log("I HAPPEN SECOND!")
// * Since the javascript is single-threaded so the browser does the multithreaded work like in the above case. So JS gives browser to remind it about the callback fns after the work is executed. So the api calls are handled by browser. So after three seconds the browser put the function in the call stack.

const btn = document.querySelector('button');
// setTimeout(()=>{
//     btn.style.transform ='translate(100px,100px)';
//     setTimeout(()=>{
//     btn.style.transform ='translate(200px,200px)';
//     setTimeout(()=>{
//         btn.style.transform ='translate(300px,300px)';
//         setTimeout(()=>{
//             btn.style.transform ='translate(200px,200px)';
//             setTimeout(()=>{
//                 btn.style.transform ='translate(100px,100px)';
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000)

const moveX = (element,amount,delay,onSuccess,onFailure)=>{
    
    setTimeout(()=>{
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        if(elRight + amount > bodyBoundary){
            console.log("Done- Cannot go that far!!");
            onFailure();
        }
        else {
        element.style.transform = `translateX(${currLeft+ amount}px)`;
         onSuccess();
    }
},delay)

}
// moveX(btn,100,2000,()=>{
//     moveX(btn,100,2000,()=>{
//         moveX(btn,100,2000,()=>{
//             moveX(btn,100,2000,()=>{
//                 moveX(btn,100,2000,()=>{
//                     moveX(btn,100,2000);
//                 });
//             },);
//         });
//     },);
// });
// *This code is long and difficult to understand its called callback Hell. Here we can use promises.
// moveX(btn,100,2000,()=>{
//     // success
//     moveX(btn,400,2000,()=>{
//         //success
//         moveX(btn,1000,2000,()=>{
//             //success
//             alert("Do you still have screen!!")
//         },()=>{
//             alert("CANT MOVE FURTHER !!!")
//         })
//     },()=>{
//         alert("CANT MOVE FURTHER !!!")
//     })
// },()=>{
//     alert("Cant move further !!")
// })

// * How to create promises and how to interact with a promise.
// * A promise is an object representing the eventual completion or failure of an asynchronous function