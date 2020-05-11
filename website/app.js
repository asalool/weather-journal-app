/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = ',US&appid=70ffa5e360831848a703aac925439b64';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// http://api.openweathermap.org/data/2.5/weather?zip=94040,US&appid=70ffa5e360831848a703aac925439b64

// select the generate item and add listener
document.getElementById('generate').addEventListener('click', performAction);

// the main action function
function performAction(e){
    // get the value of the zip item    
    const zipValue = document.getElementById('zip').value;

    // make call to the api
    getTemp(baseURL, zipValue, apiKey);
}

// get temp from the api
const getTemp = async (apiURL, zip, key)=> {
    const fullURL = apiURL + zip + key;
    const response = await fetch(fullURL, {
        method: 'GET',
    });
    try {
        const newData = response.json();
        console.log(newData);
    } catch(error) {
        console.log('error', error);
    }
} 

