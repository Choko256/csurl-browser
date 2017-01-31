const Qs = require('qs')

function onReadyStateChange(xhr, resolve, reject) {
    return () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(`[HTTP] Response Status 200`)
                resolve(JSON.parse(xhr.responseText))
            } else {
                console.log(`[HTTP] Response Status ${xhr.status}`)
                reject(JSON.parse(xhr.responseText))
            }
        }
    }
}

class Http {
    static get(uri, args = {}) {
        return new Promise((resolve, reject) => {
            uri = `${uri}${Object.keys(args).length ? `?${qs.stringify(args)}` : ''}`
            let xhr = new XMLHttpRequest()
            console.log(`[HTTP] Requesting GET ${uri}`)
            xhr.open('GET', uri, true)
            xhr.onreadystatechange = onReadyStateChange(xhr, resolve, reject)
            xhr.send(null)
        })
    }

    static post(uri, args = {}) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            console.log(`[HTTP] Requesting POST ${uri} with ${JSON.stringify(args)}`)
            xhr.open('POST', uri, true)
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.onreadystatechange = onReadyStateChange(xhr, resolve, reject)
            xhr.send(Object.keys(args).length ? Qs.stringify(args) : null)
        })
    }
}

export { Http }