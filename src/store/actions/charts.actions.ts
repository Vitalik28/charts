import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStrategyByNum = createAsyncThunk(
  'strategy/get',
  async (num: number, thunkApi) => {
    try {
      const response = await axios.get(
        `https://api.1282075-cv69336.tw1.ru/api/dashboard?st_num=${num}`
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
