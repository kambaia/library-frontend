import { Box, InputLabel } from "@mui/material";
import styled from "styled-components";
import theme from "../../../styles/theme";

export const WrapperModal = styled(Box)`
  position: 'absolute';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border: 2px solid #000;
  box-shadow: 24;
  background-color: #f00;
`;
export const CustomPaper = styled.div`
  margin-top: ${theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px #ddd;
  overflow-y: auto;
  overflow-x: hidden;
  height: 90vh;
  padding: 2rem 0;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff8f2c;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  @media only screen and (max-width: 600px) {
    overflow: hidden;
    margin: 2rem 0;
    height: auto;
  }
`;

export const CloseModal = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   box-sizing: border-box;
   .modal-close{
    background-color:#ddd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    color: #555;
    cursor: pointer;
    :hover{
      opacity: .7;
    }
   }
`

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 10px;
  box-shadow: 0px 0px 0.1rem #ddd;

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
export const Label = styled(InputLabel)`
  margin: 10px;
  width: 50%;
  color: #111;
`;


export const styleCard = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  borderTop: '4px solid #0c854e',
  boxShadow: 24,
  p: 2,
};

export const styleTitle = {
  p: 2,
  fontSize: '1.5rem',
  borderBottom: '1px solid #ccc',
  color: '#555'
};
