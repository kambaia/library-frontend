import React, { useState } from 'react';
import { Fade, TextField, TextFieldProps, Tooltip } from '@mui/material';
type TVTextFieldProps = TextFieldProps & {
  name: string;
  rows?: string;
  tips?: string;
  multiline?:string;
  value: string
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
};
export const VTextField: React.FC<TVTextFieldProps> = ({ rows, multiline, value, tips, placement, ...rest }) => {
  return (
    <>
      <Tooltip title={tips || ''} arrow TransitionComponent={Fade} placement={placement}>
        <TextField
          {...rest}
          error={rest.error}
          helperText={rest.helperText}
          onChange={(e) => {
            rest.onChange?.(e);
          }}
          rows={rows}
          multiline={multiline}
          value={value}
          onKeyDown={(e) => {
            rest.onKeyDown?.(e);
          }}
        />
      </Tooltip>
    </>
  );
};
