import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    let simspons = [
        {
            'id': 1,
            'name': 'Homer',
            'surname': 'Simpson'
        },
        {
            'id': 2,
            'name': 'Marge',
            'surname': 'Simpson'
        },
        {
            'id': 3,
            'name': 'Bart',
            'surname': 'Simpson'
        },
        {
            'id': 4,
            'name': 'Liza',
            'surname': 'Simpson'
        },
    ]

    return (
        <div>
            {
                simspons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    )
}

export {
    Simpsons
}
