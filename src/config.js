import 'dotenv/config'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const BASE_URL = "http://localhost:3000"

function fetchData(endpoint) {
return fetch(`${BASE_URL}/${endpoint}`)
.then(response => response.json())
.catch(error => console.error('Error fetching data:', error))
}

function calculateSum(a, b) {
return a + b
}

function calculateDifference(a, b) {
return a - b
}

export {
OPENAI_API_KEY,
fetchData,
calculateSum,
calculateDifference
}
