const Car = ({car, setUpdatedCar, setDeletedCar}) => {
    const {id, brand, price, year} = car

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdatedCar(car)}>Update</button>
            <button onClick={() => setDeletedCar(car)}>Delete</button>
        </div>
    )
}

export {
    Car
}
