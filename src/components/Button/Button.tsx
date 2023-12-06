import ButtonStyle from "./ButtonStyle";

interface ButtonProps {
  disabled?: boolean;
  type?: "reset" | "submit" | "button";
  text: string;
  modifiers?: ("small" | "dotted" | "solid")[];
  actionOnClick?: () => void;
}

const Button = ({
  disabled,
  text,
  type,
  actionOnClick,
  modifiers,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyle
      disabled={disabled}
      type={type}
      onClick={actionOnClick}
      className={`button ${
        modifiers
          ? modifiers?.map((modifier) => "button--" + modifier).join(" ")
          : ""
      }`}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
