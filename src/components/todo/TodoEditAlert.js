import Swal from "sweetalert2";
import store from "../../redux/store/store";
import { editTodo } from "../../redux/state/todo/todoSlice";

export function TodoEditAlert(todo) {
    Swal.fire({
        title: 'Update Task Name',
        input: 'text',
        inputValue: todo.title,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            } else {
                store.dispatch(editTodo({ title: value, id: todo.id }))
                return
            }
        },
        showCancelButton: true
    })
}