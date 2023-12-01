import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="head">
      <Navigation />
      <img
        className="head__logo"
        src="/images/logoExpected.webp"
        alt="Logo that say's Walk the line"
        width="99"
        height="62"
      />
      <div className="head__banner" />
    </HeaderStyled>
  );
};

export default Header;
