import axios from "axios";
import {environment} from "../environments/environment";

const api = environment.ec2Api.ec2;

const CommonAxios = axios.create({
    baseURL: api,
    timeout: 1000
})

CommonAxios.interceptors.request.use(
    function (config) {
        // 요청 바로 직전
        // axios 설정값에 대해 작성합니다.
        return config
    },
    function (error) {
        // 요청 에러 처리를 작성합니다.
        return Promise.reject(error)
    }
)

CommonAxios.interceptors.response.use(
    function (response) {
        return response
    },

    function (error) {
        return Promise.reject(error)
    }
)

export default CommonAxios;

