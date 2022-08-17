import CommonAxiosService from "./CommonAxios.service";

const rest = {
    async postSaveHtml(data: any) {
        return await CommonAxiosService.post("quill/saveHtml", data);
    },
    async getHtml(path: string) {
        return await CommonAxiosService.get("quill/getHtml/" + path);
    }
}

export default rest


