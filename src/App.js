import './App.css';
import {CarForm} from "./components";
import {Cars} from "./components";
import {useEffect, useState} from "react";
import {carService} from "./services";

function App() {
    const [cars, setCars] = useState([])
    const [updatedCar, setUpdatedCar] = useState(null)
    const [deletedCar, setDeletedCar] = useState(null)

    if (deletedCar) {
        for (let i = 0; i < cars.length; i++) {
            if(deletedCar.id === cars[i].id){
                cars.splice(i, 1)
                setCars([...cars])
                carService.deleteCar(deletedCar.id)
            }
        }
    }


    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, [])

    return (
        <div className="App">
            <CarForm setCars={setCars} updatedCar={updatedCar}/>
            <hr/>
            <Cars cars={cars} setUpdatedCar={setUpdatedCar} setDeletedCar={setDeletedCar}/>
        </div>
    );
}

export default App;
