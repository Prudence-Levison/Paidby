
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotifications = createAsyncThunk('notification', async (undefined, thunkAPI) => {
	try {
		const userData = window.localStorage.getItem('user')!;

		const accessToken = JSON.parse(userData)?.access_token;

		const response = await axios.get(`https://api-logic-dev.paidby.app/notification?page=1`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return response;
	} catch (error: any) {
		const message = error?.response?.data?.message?.toString();
		return thunkAPI.rejectWithValue(message);
	}
  
});
