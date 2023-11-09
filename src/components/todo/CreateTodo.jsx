import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/state/todo/todoSlice"
import { useRef } from "react"
const CreateTodo = () => {
    const todo = useRef()
    const dispatch = useDispatch()
    const handleAddTodo = () => {
        const data = {
            id: Date.now(),
            title: todo.current.value,
            completed: false
        }
        dispatch(addTodo(data))
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-10">
                    <input ref={todo} type="text" className='form-control' placeholder='Enter Todo' />
                </div>
                <div className="col-md-2">
                    <button className='btn btn-success w-100' onClick={() => dispatch(handleAddTodo())}>Add Todo</button>
                </div>
            </div>
        </div>
    )
}
export default CreateTodo
