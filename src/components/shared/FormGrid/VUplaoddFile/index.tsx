import React from "react";
import { Fade, IconButton, TextFieldProps, Tooltip } from "@mui/material";
import { PhotoCamera, FilePresent, DriveFolderUpload} from "@mui/icons-material";
import { Containner } from "./styles";
type TVTextFieldProps = TextFieldProps & {
  name: string;
  tips?: string;
  fileType?: string;
};
export const VUplaoddFile: React.FC<TVTextFieldProps> = ({
  tips,
  fileType,
  name,
  ...rest
}) => {
  console.log(fileType);
  return (
    <Containner
    aria-label="upload picture"
    component="label"
    sx={{
      padding:!fileType? '20px': '5px',
      border: '3px dashed #ddd',
    }}
    >
      <Tooltip
        title={tips || ""}
        arrow
        TransitionComponent={Fade}
      >
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          className=""
        >
          <input
            hidden
            accept="image/*"
            type="file"
            name={name}
            onChange={(e) => {
              rest.onChange?.(e);
            }}
            onKeyDown={(e) => {
              rest.onKeyDown?.(e);
            }}
          />
          {fileType === "doc" ? <DriveFolderUpload /> : <PhotoCamera />}
        </IconButton>
      </Tooltip>
    </Containner>
  );
};
