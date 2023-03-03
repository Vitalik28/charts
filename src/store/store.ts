import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chartsSlice from './slices/charts.slice';

export const store = configureStore({
  reducer: {
    charts: chartsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
