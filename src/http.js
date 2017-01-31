function onReadyStateChange(xhr, resolve, reject) {
    return () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(JSON.parse(xhr.responseText))
            }
        }
    }
}

class Http {
    static get(uri) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open('GET', uri, true)
            xhr.onreadystatechange = onReadyStateChange(xhr, resolve, reject)
            xhr.send(null)
        })
    }

    static post(uri, args = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.open('POST', uri, true)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.onreadystatechange = onReadyStateChange(xhr, resolve, reject)
            xhr.send(JSON.stringify(args))
        })
    }
}

export { Http }