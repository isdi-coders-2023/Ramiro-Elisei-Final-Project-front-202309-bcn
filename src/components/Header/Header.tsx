import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        width="160"
        height="38"
        className="logo"
        alt="Ludic logo"
        src="images/logoColored.svg"
      ></img>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
