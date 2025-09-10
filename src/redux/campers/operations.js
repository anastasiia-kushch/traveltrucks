import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getCampers = createAsyncThunk(
  'camper/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
      );

      return response.data.items;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
