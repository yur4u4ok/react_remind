import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {Todo} from "../../components";

const TodosPage = () => {
    const [todos, setTodos] = useState([])


    useEffect(() => {
        todosService.getAll().then(value => value.data).then(value => setTodos([...value]))
    }, [])

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}

export {
    TodosPage
}
