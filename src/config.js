const API_KEY = "abcd1234"
const URL = "http://localhost:3000"


function fetchData(endpoint) {
    return fetch(`${URL}/${endpoint}?api_key=${API_KEY}`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

function calculateSum(a, b) {
    return a + b
}

function calculateDifference(a, b) {
    return a - b
}