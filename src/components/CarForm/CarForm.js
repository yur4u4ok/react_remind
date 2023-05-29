import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars, updatedCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'})

    const submit = async (car) => {
        const {data} = await carService.createCar(car)
        setCars(prev => [...prev, data])
        reset()
    }

    const update = async (car) =>{
        const {data} = await carService.updateCar(updatedCar.id, car)
        if(Object.keys(data).length){
            const {data} = await carService.getAll()
            setCars([...data])
            reset()
        }
    }

    useEffect(() => {
        if (updatedCar) {
            setValue('brand', updatedCar.brand)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)
        }
    }, [updatedCar])

    return (
        <div>
            <form onSubmit={handleSubmit(updatedCar ? update : submit)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    required: {value: true, message: 'required'},
                    pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'Only letters from 1 to 20'}
                })}/>
                {errors.brand && <span>{errors.brand.message}</span>}

                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    required: true,
                    min: {value:0, message: 'Min 0'}
                })}/>
                {errors.price && <span>{errors.price.message}</span>}

                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    max: {value: new Date().getFullYear(), message: `Max year can be ${new Date().getFullYear()}`},
                    required: true
                })}
                />
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{updatedCar ? 'Update' : 'Save'}</button>
            </form>
        </div>
    )
}

export {
    CarForm
}
