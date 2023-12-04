import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <span className="loader"></span>
      <span className="loading">Loading ...</span>
    </LoadingStyled>
  );
};

export default Loading;
