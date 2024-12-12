import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice.jsx"
export default configureStore({
    reducer: {
        counter: counterSlice
    }
})