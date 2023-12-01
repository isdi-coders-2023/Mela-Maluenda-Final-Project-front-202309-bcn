import { useDispatch } from "react-redux";
import HomeStyled from "./HomePageStyled";
import { useEffect } from "react";
import { loadPhotosActionCreator } from "../../store/features/photosSlice";
import photosData from "../../data/photosData/photosData";
import PhotosList from "../../components/PhotosList/PhotosList";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotosActionCreator(photosData));
  }, [dispatch]);

  return (
    <HomeStyled className="data">
      <section className="data__article">
        <h1 className="data__title">Street photography</h1>
        <p className="data__text">
          Is the photographic gender that takes place in the public space,
          within the ordinary life. Sometimes extraordinary and spontaneous
          things occur in daily life basis and the photographer has to be a good
          observer and fast reacting with the camera to take a record of that
          moment.
        </p>
        <p className="data__text">
          This kind of photography has set its roots in documentary and fine
          arts photography.
        </p>
      </section>

      <section className="data__article">
        <h2 className="data__title">Street photo contest</h2>
        <PhotosList />
      </section>
    </HomeStyled>
  );
};

export default HomePage;
