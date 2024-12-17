
 import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    isLoggedIn : boolean;
    email: string;
    password : string;
}

const initialState: UserState = {
    isLoggedIn: false,
    email: '',
    password: '',
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login(state, action: { payload: { email: string; password: string } }) {
        state.isLoggedIn = true;
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
      logout(state) {
        state.isLoggedIn = false;
        state.email = '';
        state.password = '';
      },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;