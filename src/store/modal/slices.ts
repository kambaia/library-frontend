import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../../types/componets-types/general';

const INITIAL_STATE:ModalType = {
  isOpen: false,
  modalType: '',
  dataModal: null,
};
export const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    setVisibleModal(state: ModalType, action: PayloadAction<ModalType>) {
      state.dataModal = action.payload;
      state.modalType= action.payload.modalType
      state.isOpen = true
    },
    closeModal(state: ModalType, action: PayloadAction<any>) {
      state.dataModal = action.payload;
      state.isOpen = false
    },
  },
});
