import { IconType } from "react-icons";
import { ButtonFilder } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  showIcon: any;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  showIcon,
  ...props
}) => {
  return (
    <ButtonFilder {...props}>
      {showIcon}
      {title}
    </ButtonFilder>
  );
};
