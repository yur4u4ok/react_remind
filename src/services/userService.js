import {axiosService} from "./axiosService";

const userService = {
    getAll: () => axiosService.get('/users'),
    getPostsByUserId: (id) => axiosService.get(`/users/${id}/posts`)
}

export {
    userService
}
