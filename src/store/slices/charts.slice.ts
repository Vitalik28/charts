import { createSlice } from '@reduxjs/toolkit';
import { getStrategyByNum } from '../actions/charts.actions';
import { PayloadAction } from '@reduxjs/toolkit';

export interface IData {
  time: string;
  value: string;
}

interface ChartsState {
  title: string;
  data_usd: IData[];
  data_btc: IData[];
  isLoading: boolean;
  error: string;
}
const initialState: ChartsState = {
  title: '',
  data_usd: [],
  data_btc: [],
  isLoading: false,
  error: '',
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {},
  extraReducers: {
    [getStrategyByNum.fulfilled.type]: (
      state,
      action: PayloadAction<ChartsState>
    ) => {
      state.title = action.payload.title;
      state.data_btc = action.payload.data_btc;
      state.data_usd = action.payload.data_usd;
      state.isLoading = false;
      state.error = '';
    },
    [getStrategyByNum.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getStrategyByNum.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});


export default chartsSlice.reducer