// perform HTTP requests.

function http(method, body, route, callback) {
    /// #if DEBUG
    // console.log(`${apiDomain}/api/${route}`)
    /// #endif

    let headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
    })

    let init = {
        method: method,
        headers: headers,
    }

    if (body) {
        init.body = JSON.stringify(body)
    }

    fetch(`${apiDomain}/api/${route}`, init).then(response => {
        console.log(response.status)

        if (response.status == 200) {
            response.json().then(callback)
        } else {
            console.log(response)
            callback(response.status)
        }
    }).catch(reason => {
        console.log(reason)
    })
}

function get(route, callback) {
    http("GET", null, route, callback)
}

function post(body, route, callback) {
    http("POST", body, route, callback)
}

function remove(route, callback) {
    http("DELETE", null, route, callback)
}

export { get, post, remove }