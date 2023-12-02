import ButtonStyle from "./ButtonStyle";

interface ButtonProps {
  disabled?: boolean;
  type: "reset" | "submit" | "button" | undefined;
  text: string;
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  disabled,
  text,
  type,
  actionOnClick,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyle
      type={type}
      disabled={disabled}
      onClick={actionOnClick}
      className={className}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
