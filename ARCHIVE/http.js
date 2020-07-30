const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load',function(){
    // console.log(firstRequest.response);
    // console.log(this.response);
    const data = JSON.parse(this.response);
    // console.log(data.results[0].films[0]);
    const filmUrl = data.results[0].films[0];
    console.log("FIRST REQUEST WORKED");
    // var heading = document.createElement('h1');
    const listH = document.querySelector('body');
    let listC ="<h1>List of planets in Star Wars</h1> <ul>";
    data.results.forEach(planet => {
        listC += `<li>${planet.name}</li>`;

    });
    listH.innerHTML = listC + '</ul>';
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load',function(){
    console.log("SECOND REQUEST WORKED");
        // console.log(this.response);
        const filmData = JSON.parse(this.responseText);
        console.log(filmData);
    })
    filmReq.addEventListener('error',function(err){
        console.log("Error",err);
    })
    
    filmReq.open('GET',filmUrl)
    filmReq.send()
})
firstRequest.addEventListener('error',()=>{
    console.log("Error occurred!!");
})
firstRequest.open('GET','https://swapi.dev/api/planets/')
firstRequest.send()
// console.log("CALLED BEFORE THE REQUEST")