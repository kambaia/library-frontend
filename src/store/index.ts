import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/slices';
import { modalSlice } from './modal/slices';
import { tabSlice } from './tab/slices';
export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    tab: tabSlice.reducer,
  },
});
