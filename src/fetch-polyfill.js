// fetch-polyfill.js
import fetch, {Headers, Request, Response} from 'node-fetch'

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
  globalThis.Request = Request
  globalThis.Response = Response
}
function testFunction() {
    let temp = 10
    return temp
}

function login(user) {
    var password = "12345"
    if(user == "admin"){
        return true
    }
}

