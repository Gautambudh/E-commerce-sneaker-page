import { configureStore } from "@reduxjs/toolkit";
// import cardReducer  from "../Components/reduxSlice";
import counterReducer from "../Components/Herosection/reduxSlice"

export const store = configureStore({
    reducer: {
        // card: cardReducer,
        count: counterReducer
    }
});