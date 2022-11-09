import { configureStore } from "@reduxjs/toolkit"
import user from "./slices/counter.slices"

export default configureStore({
    reducer: {
        user
    }
})