import HomeStyled from "./HomePageStyled";

const HomePage = () => {
  return (
    <HomeStyled className="data">
      <article className="data__article">
        <h1 className="data__title">Street photography</h1>
        <p className="data__text">
          Is the photographic gender that takes place in the public space,
          within the ordinary life. Sometimes extraordinary and spontaneous
          things occur in daily life basis and the photographer has to be a good
          observer and fast reacting with the camera to take a record of that
          moment. This kind of photography has set its roots in documentary and
          fine arts photography.
        </p>
      </article>

      <article className="data__article">
        <h1 className="data__title">Street photo contest</h1>
      </article>
    </HomeStyled>
  );
};

export default HomePage;
