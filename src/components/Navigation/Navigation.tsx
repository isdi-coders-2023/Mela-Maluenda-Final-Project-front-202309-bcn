import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="menu">
        <NavLink to="/">
          <li className="menu__home">Home</li>
        </NavLink>
        <NavLink to="/">
          <li className="menu__add">Add</li>
        </NavLink>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
