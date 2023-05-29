import {Car} from "../Car/Car";

const Cars = ({cars, setUpdatedCar, setDeletedCar}) => {


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setUpdatedCar={setUpdatedCar} setDeletedCar={setDeletedCar}/>)}
        </div>
    )
}

export {
    Cars
}
