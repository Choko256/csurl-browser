import { Http } from './http'

const API_URL = 'https://api.csurl.fr/api/'
const STAT_URL = 'https://api.csurl.fr/stats/'

export default {
    get(short) {
        return Http.get(`${API_URL}${short}`)
    },
    shorten(origin) {
        return Http.post(API_URL, {
            origin
        })
    },
    stat(period) {
        return Http.get(`${STAT_URL}${period}`)
    }
}
