import React from 'react';

export type TPanelTextProps = {
  panelNumber: number;
  handleOnchange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  setFormatText: (value: 'right' | 'center' | 'left') => void;
  formatText: 'right' | 'center' | 'left';
  removeGridText: (value: number) => void;
  items: Array<number>;
  doubleText?: boolean;
};
export type TSelectProps = {
  value: string;
  label: string;
};


export type TLogin = {
  email: string;
  password: string;
};



export type ModalType = {
  isOpen: boolean;
  modalType: string;
  dataModal: any;
};



export type TabType = {
  value:number
};
