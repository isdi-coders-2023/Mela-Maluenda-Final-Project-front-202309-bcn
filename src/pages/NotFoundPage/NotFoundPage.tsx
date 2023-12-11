import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not">
      <h1 className="not__title">Not found</h1>
      <img
        className="not__image"
        src="/images/notFound.webp"
        alt="An older woman covering her face with her hands"
        width="320"
        height="212"
      />
      <p className="not__message">
        We are unable to load the page at this time.
      </p>
      <Link className="not__button not__button--home" to={"/home/"}>
        Go home
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
