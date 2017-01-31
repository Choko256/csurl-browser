import { Http } from './http'

const API_URL = 'https://api.csurl.fr/api/'

export default {
    get(short) {
        return Http.get(`${API_URL}${short}`)
    },
    shorten(origin) {
        return Http.post(API_URL, {
            origin
        })
    }
}
