import * as React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerToolbarProps} from '@mui/x-date-pickers/DatePicker';
import { Fade, Tooltip } from '@mui/material';
export const GENERAL_DATE_FORMAT = 'dd.MM.yyyy';
export const GENERAL_DATE_FORMAT_BE = 'yyyy-MM-dd';

type TVTextFieldProps = DatePickerToolbarProps<Date> & {
    name: string;
    tips?: string;
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
  
export const  VDatePicker= ({tips, placement}:TVTextFieldProps)=> {
  const [value, setValue] = React.useState<Date | null>(null);
  console.log(value);
  return (
    <Tooltip title={tips || ''} arrow TransitionComponent={Fade} placement={placement}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={value}
        inputFormat={GENERAL_DATE_FORMAT}
        
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </Tooltip>
  );
}