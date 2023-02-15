import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from '../../types/authTypes';
import { TAccessUser } from '../../types/interface/UserInterface';

const INITIAL_STATE:AuthType= {
  isAuthenticated: !!localStorage.getItem('@bucaso:token'),
  user: {active:0, email: '', id:0, role: '', type:'', userName:'', userProfile:'', fullName:'', permission: ''}
};
export const authSlice = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    authToken(state: AuthType, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    addUser(state: AuthType, action: PayloadAction<TAccessUser>) {
      state.user = action.payload;
    },
  },
});
