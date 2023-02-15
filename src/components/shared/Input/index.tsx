import { InputFilder } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ title, label, ...props }) => {
  return <InputFilder { ...props }></InputFilder>;
};
