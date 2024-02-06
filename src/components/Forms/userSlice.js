import { createSlice } from "@reduxjs/toolkit";

//initiallizing the user
const initialState = {
    currentUser: null,
    isAuthenticated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser( state, action ){
            state.currentUser = action.payload
            state.isAuthenticated = true
        }
    }
})

//Exporting the state as a selector to prevent continous initialization
export const selectUser = state => state.currentUser
export const authStatus = state => state.isAuthenticated
//Export the actions
export const { setUser } = userSlice.actions

export default userSlice.reducer