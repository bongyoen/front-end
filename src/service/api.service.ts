import CommonAxiosService from "./CommonAxios.service";

const rest = {
    async postSaveHtml(data: any) {
        return await CommonAxiosService.post("quill/saveHtml", data);
    }
}

export default rest


