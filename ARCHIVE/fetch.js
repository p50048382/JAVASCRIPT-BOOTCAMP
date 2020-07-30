
const checkStatusAndParse = (response)=>{
    if(!response.ok){
        throw new Error(`Status Code Error : ${response.status}`);
    }
    else{
    return response.json();
    }
}
const printPlanets = (data)=>{
    console.log("Fetched next 10 planets");
    for (const planet of data.results) {
        console.log(planet.name);
    }
    // We can return new promise this way as well
    return Promise.resolve(data.next);
//    const prom=  new Promise ((resolve,reject)=>{
//         resolve(data);
//     })
//     return prom;

}
const getNextPlanets = (url='https://swapi.dev/api/planets/')=>{
    return fetch(url);
}

getNextPlanets()
.then(checkStatusAndParse)
.then(printPlanets)
.then(getNextPlanets)
.then(checkStatusAndParse)
.then(printPlanets)
.then((getNextPlanets))
.then(checkStatusAndParse)
.then(printPlanets)
.catch((error)=>{
    console.log("SOMETHING WENT WRONG")
    console.log(error)
})

