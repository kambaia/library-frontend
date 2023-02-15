import { FormControlLabelProps } from "@mui/material";
import { ReactElement } from "react";
import { TAccessUser } from "./interface/UserInterface"

export type AuthType = {
    isAuthenticated: boolean | string | null,
    user?: TAccessUser
}


export type TFormGridItemProps = {
    id: string;
    label?: string;
    input: ReactElement | Element;
    helperText?: string;
    hintText?: string;
    textarea?: boolean;
    hideHelperText?: boolean;
    radioLabel?: ReactElement | Element;
    selectLabelProps?: {
      value: string;
      values: string[];
      onChange: (value: string) => void;
    };
    addColonToLabel?: boolean;
  } & Partial<FormControlLabelProps>;
  

  