import axios from '@/util/http'
// import axios from 'axios'

const host = 'http://127.0.0.1:8000'

export const login = params => {
    let url = `${host}/login/`
    return axios.post(url, params)
}
