// Using promise to solve the async function


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
moveX(btn,100,2000)
.then(()=>moveX(btn,100,1000))
.then(()=> moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=> moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=> moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=> moveX(btn,100,1000))
.then(()=>moveX(btn,100,1000))
.then(()=> console.log("STOPPED!!"))
.catch((err)=>
    console.error(err.message)
)


// Promise Introduction
// const willGetYouADog = new Promise((resolve,reject)=>{
//     const rand = Math.random();
//     if(rand<0.5){
//         reject();
//     }
//     resolve()
// })
// willGetYouADog.then(()=>{
//     console.log("HEY WE GOT A DOG !!!!")
// });
// willGetYouADog.catch(()=>{
//     console.log(":( You got cheated ")
// });

// const willGetYouADog1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     const rand = Math.random();
//     if(rand<0.5){
//         reject();
//     }
//     resolve()
//     },5000)

// })
// willGetYouADog1.then(()=>{
//     console.log("HEY WE GOT A DOG !!!!")
// });
// willGetYouADog1.catch(()=>{
//     console.log(":( You got cheated ")
// });

const makeDogPromise =()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const rand = Math.random();
    if(rand<0.5){
        reject();
    }
    else{
    resolve()
    }
    },1000)

})
// *Without chaining
// var d = makeDogPromise();
// d.then(()=>{
//     console.log("OK")
// })
// d.catch(()=>{
//     console.log("Not OK")
// })
// *Chaining
// makeDogPromise().then(()=>{
//     console.log("HEY WE GOT A DOG !!!!")
// }).catch(()=>{
//     console.log(":( You got cheated ")
// });
// *When you reject or resolve a promise you can return a value.
// *A fake request
const fakeRequest = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
                const pages ={
                    '/users':[
                        {
                        id          : 1, 
                        userName    : 'Dilshad Ahmad'
                    },
                        {
                        id          : 5,
                        userName    : 'Saddam Shaikh'
                    },
                    ],
                    '/users/1':{
                        id          : 1,
                        userName    : 'DIlshad AHmad',
                        upvotes     : 360,
                        city        : 'Hoston',
                        topPostId   : 454321
                    },
                    '/users/5':{
                        id          : 5,
                        userName    : 'Saddam Shaikh',
                        upvotes     : 360,
                        city        : 'New York',
                        topPostId   : 423322
                    },
                    
                    '/posts/454321':{
                        id          : 45321,
                        title       : "Ladies and Gentlemen, may I introduce my pet pig, Hamlet"
                    },
                    '/about'        :'This is the about page!'
                };
                const data = pages[url];
                if(data){
                    resolve({
                        resStatus:200,
                        data,
                        error: false
                    })
                }
                else 
                reject({
                    error: true,
                    message: "This endpoint doesnt exist!!",
                    resStatus:404
                })

            },1000)
    })
}
// fakeRequest('/users').then((res)=>{
//     const id = res.data[0].id;
//     // console.log(id);
//    return fakeRequest(`/users/${id}`)
// })
// .then((res)=>{
//     // console.log(res);
//     const post = res.data.topPostId;
//   return fakeRequest(`/post/${post}`)
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err)
// })



// fakeRequest('/users').then((res)=>{
//     const id = res.data[0].id;
//     console.log(id);
//     fakeRequest(`/users/${id}`).then((data)=>{
//         console.log(data);
//         const post = data.data.topPostId;
//         fakeRequest(`/posts/${post}`).then((data)=>{
//             console.log(data);
            
//         })
//     })
// })



// fakeRequest('/about').then((res)=>{ //*This will work
// fakeRequest('/dogs').then((res)=>{
//     console.log(res);
//     console.log("Request Worked!!")
// }).catch((res)=>{
//     console.log(res);
//     console.log("Request FAILED!!")
// })
// fakeRequest('/pages').then((res)=>{
//     console.log(res);
//     console.log("Request Worked!!")
// }).catch((res)=>{
//     console.log(res);
//     console.log("Request FAILED!!")
// })