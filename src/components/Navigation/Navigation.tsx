import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled className="navigation">
      <ul className="navigation__list">
        <li className="navigation__element">
          <NavLink to="/home" className="navigation__navlink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className="navigation__navlink">
            Add activity
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
