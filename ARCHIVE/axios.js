// *Its a library for making javascript http requests. Its an external library called axios.
const fetchNextPlanets = (url ="https://swapi.dev/api/planets/" )=>{
    
    console.warn("Fetching next 10 planets ");
    return axios.get(url)
}
const printPlanets = ({data})=>{
    for (const planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
}

fetchNextPlanets()
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)
.then(fetchNextPlanets)
.then(printPlanets)

.catch((error)=>{
    console.log(`Request failed ${error}`);
    console.log(error);
})