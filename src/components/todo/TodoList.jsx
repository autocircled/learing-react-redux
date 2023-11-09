import { useSelector, useDispatch } from 'react-redux'
import { TodoDeleteAlert } from './TodoDeleteAlert'
import { updateTodo } from '../../redux/state/todo/todoSlice'
import { TodoEditAlert } from './TodoEditAlert'
const TodoList = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    const onChangeHandler = (todo) => {
        dispatch(updateTodo(todo))
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="w-5">Id</th>
                                <th>Title</th>
                                <th className="w-15">Completed</th>
                                <th className="w-15">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{todo.title}</td>
                                    <td>
                                        <input className='form-check-input' type="checkbox" checked={todo.completed ? 'checked' : ''} onChange={() => { onChangeHandler(todo) }} />
                                    </td>
                                    <td>
                                        <button className='btn btn-dark' onClick={() => TodoEditAlert(todo)}>Edit</button>
                                        <button className='btn btn-danger ms-2' onClick={() => TodoDeleteAlert(index)}>Delete</button>

                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default TodoList
