import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    postService
}
