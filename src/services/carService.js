import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    createCar: (newCar) => axiosService.post(urls.cars, newCar),
    updateCar: (id, data) => axiosService.put(`${urls.cars}/${id}`, data),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}
