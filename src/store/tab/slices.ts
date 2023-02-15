import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TabType } from '../../types/componets-types/general';

const INITIAL_STATE:TabType = {
  value: 0,
};
export const tabSlice = createSlice({
  name: 'tab',
  initialState: INITIAL_STATE,
  reducers: {
    setTab(state: TabType, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});
