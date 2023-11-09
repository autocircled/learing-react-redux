import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/counter/counterSlice";
import TodoReducer from "../state/todo/todoSlice";

export default configureStore({
    reducer: {
        counter: CounterReducer,
        todo: TodoReducer

    }
})