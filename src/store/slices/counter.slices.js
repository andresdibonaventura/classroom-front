import { createSlice } from "@reduxjs/toolkit"

export const mySlice = createSlice({
    name: 'user',
    initialState: "",
    reducers: {
        setUser: (state, actions) => {
            return actions.payload
        }
    }
})

export const {  setUser } = mySlice.actions;
export default mySlice.reducer;