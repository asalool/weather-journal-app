/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = ',US&appid=70ffa5e360831848a703aac925439b64';
let temp = '';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// http://api.openweathermap.org/data/2.5/weather?zip=94040,US&appid=70ffa5e360831848a703aac925439b64

// select the generate item and add listener
document.getElementById('generate').addEventListener('click', performAction);

// the main action function
function performAction(e){
    // get user input values
    const zipValue = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    // make call to the api
    getTemp(baseURL, zipValue, apiKey)

    .then(function() {
        let data = `{temperature: ${temp}, date: ${newDate}, user-response: ${feelings}}`;
        console.log(data);
        postData('/addData', data);
    });
};

// get temp from the api
const getTemp = async (apiURL, zip, key)=> {
    const fullURL = apiURL + zip + key;
    const response = await fetch(fullURL);
    try {
        const newData = await response.json();
        temp = newData.main.temp;
        console.log(`new temp. ${temp} has been succesfully retrieved from the API`);
    } catch(error) {
        console.log('API get error', error);
    } 
}

// post data to the server
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        console.log(newDate);
        console.log('data posted successfully to the server');
    } catch(error) {
        console.log('post error', error);
    }     
}


// get data from the server and update element

// chain another async function to post the data to the server

// chain another async function to update an element after getting the values from the server