import * as React from "react";
import { Autocomplete, Fade, TextField, Tooltip } from "@mui/material";

type optionData = {
  label: string;
  value: string;
};
type VSelect = {
  tips?: string;
  label?: string;
  optionData: Array<optionData>;
  value: optionData;
  placeholder?: string;
  onChange: (value: optionData) => void;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
};
export const VTextSelect: React.FC<VSelect> = ({
  value: currentValue,
  tips,
  placement,
  optionData,
  label,
  onChange,
}) => {
  console.log(currentValue);
  const [value, setValue] = React.useState<optionData | null>(currentValue);
  React.useEffect(() => {
    if (currentValue) setValue(currentValue);
  }, [currentValue]);
  return (
    <Tooltip
      title={tips || ""}
      arrow
      TransitionComponent={Fade}
      placement={placement}
    >
      <Autocomplete
        disablePortal
        options={optionData}
        placeholder="Seleciona a Informação"
        size="small"
        fullWidth
        getOptionLabel={(option) => option.label}
        value={value}
        onChange={(e, value: optionData | null) => {
          setValue(value!);
          onChange(value!);
        }}
        renderInput={(params) => (
                  <TextField {...params}  defaultValue={value} variant="outlined" />
        )}
      />
    </Tooltip>
  );
};
