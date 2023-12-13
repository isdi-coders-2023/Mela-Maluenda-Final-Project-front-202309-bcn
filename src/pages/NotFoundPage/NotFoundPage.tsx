import { Link } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <h1 className="not-found__title">Not found</h1>
      <img
        className="not-found__image"
        src="/images/notFound.webp"
        alt="An older woman covering her face with her hands"
        width="320"
        height="212"
      />
      <p className="not-found__message">
        We are unable to load the page at this time.
      </p>
      <Link className="no-found__button not-found__button--home" to="/home/">
        Go home
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
