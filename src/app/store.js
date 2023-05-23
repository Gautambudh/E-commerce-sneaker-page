import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Components/Herosection/reduxSlice"

export const store = configureStore({
    reducer: {
        count: counterReducer
    }
});