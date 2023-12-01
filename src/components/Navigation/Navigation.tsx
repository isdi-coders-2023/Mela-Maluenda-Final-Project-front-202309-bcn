import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="menu">
        <li className="menu__home">
          <NavLink aria-label="home" to="/home">
            Home
          </NavLink>
        </li>
        <li className="menu__add">
          <NavLink aria-label="add" to="/">
            Add
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
