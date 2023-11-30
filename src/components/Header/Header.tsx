import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="head">
      <img
        className="head__logo"
        src="/images/logoExpected.webp"
        alt="Logo that say's Walk the line"
        width="99"
        height="62"
      />
      <div
        className="head__banner"
        title="Empty white street where we can only see a bent legs on a window."
      ></div>
    </HeaderStyled>
  );
};

export default Header;
