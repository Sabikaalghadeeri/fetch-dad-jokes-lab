let form = document.getElementById("form")
let joke = (jokes) => {
    let text = document.createElement("p")
    text.innerText = jokes
}
const fetchJokes = () => {
const apiURL = `https://icanhazdadjoke.com/`
fetch(apiURL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        "Content-Type" : "Application/json",
    }
})
.then(fetchedJokes=>{
    // Fetch will package the response into an object and pass
    // it into this callback function as the argument
    // use the .json() method to return the data in json format
    return fetchedJokes.json()
})
.then(jsonJokes=>{
    // whatever we return in the first .then gets
    // passed into THIS callback as the argument
    console.log(jsonJokes.joke)
    fetchedJokes (jsonJokes.joke)
})
.catch(err=>{
    console.log(err)
})
}
const clearList=()=>{
    diplayJoke.innerHTML=""
}

form.addEventListener("submit",(e) =>{
    e.preventDefault()

    fetchJokes()

})