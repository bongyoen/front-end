import axios from "axios";
import {environment} from "../../environments/environment";

const api = environment.ec2Api.api;

const CommonAxiosService = axios.create({
    baseURL: api,
    headers: {"content-type": `application/json`},
    timeout: 1000,
})

CommonAxiosService.interceptors.request.use(
    function (config) {

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

CommonAxiosService.interceptors.response.use(
    function (response) {
        return response
    },

    function (error) {
        return Promise.reject(error)
    }
)

export default CommonAxiosService;

