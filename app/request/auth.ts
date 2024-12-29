import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (params: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://api-dev.paidby.app/auth/login`,
        params,
        {}
      );
      return response;
    } catch (error: any) {
      const message = error?.response?.data?.message?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
