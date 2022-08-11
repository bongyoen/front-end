import {environment} from "../environments/environment";
import CommonAxios from "./CommonAxios";

const api = environment.ec2Api.local;

const rest = {
    getinfo() {
        return CommonAxios({url: api + "info", method: 'GET'});
    },


    getLiveDeviceList() {
        return CommonAxios({url: api + "info", method: 'GET'});
    }
}

export default rest


