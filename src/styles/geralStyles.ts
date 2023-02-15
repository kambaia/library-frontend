import { InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import theme from "./theme";

export const positionRelative: string = 'relative';
export const inicialWidth: string = '300px';
export const inicialHeight: string = '40px';
export const flex: string = 'flex';


export const CustomPaper = styled.div`
max-height: 600px;
overflow-y: auto;
overflow-x: hidden;


 
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #0c854e;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #fff;
  }
  @media only screen and (max-width: 600px) {
    overflow: hidden;
    margin: 2rem 0;
    height: auto;
  }
`;

export const CustomButtom = styled.div`
   width: 100%;
   display: flex;
   justify-content: end;
   align-items: center;
   button{
    width: 20%;
   }
`
export const InputGroup = styled.div<{ medium?: string }>`
  width: ${(props) => (props.medium ? "50%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
 
  .icon-group {
    padding-left: 0.5rem;
    cursor: pointer;
  }
  .label-buton {
    padding: 0.2rem;
    display: flex;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const GridFormGroup = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  gap: 2px;

`
export const ImageBox = styled.img`
width: 50px;
height: 40px;
gap: 2;
border-radius: 5px;
box-shadow: 0px 0px 10px #ddd;
`
export const Label = styled(InputLabel)`
  margin: 10px;
  width: 50%;
  color: #111;
`;
export const TextFieldNumber = styled(TextField)``;

export const DropDownList = styled(Box)`
  height: 200px;
`;
