import { FormControlLabel, FormHelperText } from '@mui/material';
import React, { ReactElement } from 'react';
import { TFormGridItemProps } from '../../../../types/authTypes';
import { StyledFormControlItem, StyledFormItem, StyledLabel } from './style';

const FormGridItem = ({
  id,
  input,
  label,
  helperText,
  hideHelperText,
  labelPlacement,
  hintText,
  radioLabel,
  selectLabelProps,
  addColonToLabel = true,
  ...props
}: TFormGridItemProps): ReactElement => {

  return (
    <StyledFormItem key={id}>
      <FormControlLabel
      label={label} {...props}
      control={<StyledFormControlItem>
        {input}
        {!!hintText && <FormHelperText>{hintText}</FormHelperText>}
        {!hideHelperText && helperText && <FormHelperText error>{helperText}</FormHelperText>}
      </StyledFormControlItem>}
      labelPlacement={labelPlacement || 'top'}
      htmlFor={id}      />
    </StyledFormItem>
  );
};

export default FormGridItem;
