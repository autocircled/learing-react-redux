import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                id: 1,
                title: "Learn React",
                completed: true
            },
            {
                id: 2,
                title: "Learn Redux",
                completed: false
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        editTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.title = "Todo Edited By Redux: " + action.payload.title
                }
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
            })
        }
    }
})

export const { addTodo, editTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer