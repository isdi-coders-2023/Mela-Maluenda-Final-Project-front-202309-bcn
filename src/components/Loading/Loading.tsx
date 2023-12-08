import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <img
        className="diafragma"
        src="/images/diafragma192.webp"
        alt="Diafragma icon"
        width="192"
        height="192"
      />
      <span className="loader" />
      <span className="loading">Loading ...</span>
    </LoadingStyled>
  );
};

export default Loading;
