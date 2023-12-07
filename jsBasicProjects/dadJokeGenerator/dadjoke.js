const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apiKey = "rtq5qe1g6MwwWq4ODQ2Tfg==QuyVTBCursOU64xK";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
try {
        jokeEl.innerText = "Updating...";
        btnEl.disable = true;
        btnEl.innerText="Loading..";
        const response= await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke!";
    
       jokeEl.innerText = data[0].joke;
    
    
} catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    console.log(error);
    btnEl.disable = false;
        btnEl.innerText = "Tell me a joke!";
}
}
btnEl.addEventListener("click", getJoke);
