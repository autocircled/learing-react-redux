import CreateTodo from '../components/todo/CreateTodo'
import TodoList from '../components/todo/TodoList'
import '../assets/css/todo.css'

const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add new Todo</h4>
                        </div>
                        <div className="card-body">
                            <CreateTodo />
                        </div>
                    </div>
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4>Todo List</h4>
                        </div>
                        <div className="card-body">
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoPage
