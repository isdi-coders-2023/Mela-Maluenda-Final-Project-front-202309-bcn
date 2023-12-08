import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  type: "button" | "submit";
  actionOnClick?: () => void;
  text: string;
  className?: string;
}

const Button = ({
  text,
  type,
  className,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} type={type} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
