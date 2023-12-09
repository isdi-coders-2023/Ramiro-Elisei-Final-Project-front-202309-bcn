import ButtonStyle from "./ButtonStyle";

interface ButtonProps {
  isDisabled?: boolean;
  type?: "reset" | "submit" | "button";
  text: string;
  modifiers?: ("small" | "dotted" | "solid" | "big")[];
  actionOnClick?: () => void;
}

const Button = ({
  isDisabled,
  text,
  type,
  actionOnClick,
  modifiers,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyle
      disabled={isDisabled}
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
