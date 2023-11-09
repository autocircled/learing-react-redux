import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/counter/counterSlice";

export default configureStore({
    reducer: {
        counter: CounterReducer

    }
})