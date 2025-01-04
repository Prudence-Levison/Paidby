import { createSlice } from "@reduxjs/toolkit";
import { apiLogin } from "../request/auth";

interface UserType {
  firstName: string;
  lastName: string;
}

interface UserState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  user: UserType | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  email: "",
  password: "",
  user: null,
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
    builder.addCase(apiLogin.fulfilled, (state, { payload }) => {
      // state.user = payload.data.
    });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
