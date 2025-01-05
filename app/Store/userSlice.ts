import { createSlice } from "@reduxjs/toolkit";
import { apiLogin } from "../request/auth";
import { RootState } from "./store";

interface UserType {
  first_name: string;
  last_name: string;
  email: string
}

interface UserState {
  isLoggedIn: boolean;
  isLoading: boolean;
  email: string;
  password: string;
  user: UserType;
}

const initialState: UserState = {
  isLoggedIn: false,
  email: "",
  password: "",
  user: { first_name: "", last_name: "", email: "" },
  isLoading: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: { payload: { email: string; password: string } }) {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.email = "";
      state.password = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiLogin.pending, (state) => {
      state.isLoggedIn = false;
      state.isLoading = true
    });
    builder.addCase(apiLogin.fulfilled, (state, { payload }) => {
      // console.log('User data fetched:', payload.data.data.legacy_v2.user);
    
      state.isLoggedIn = true;
      
      state.user = payload.data.data.legacy_v2.user;
      
      state.isLoading = false;
    });
    builder.addCase(apiLogin.rejected, (state, { error }) => {
      console.error(error);
      state.isLoggedIn = false;
      state.isLoading =true
    });
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user ;
export default userSlice.reducer;
