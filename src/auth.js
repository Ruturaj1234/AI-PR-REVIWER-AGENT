function login(user, password) {
    var adminPassword = "12345"

    if(user == "admin" && password == adminPassword){
        console.log("Login success")
        return true
    } else {
        console.log("Login failed")
    }
}

