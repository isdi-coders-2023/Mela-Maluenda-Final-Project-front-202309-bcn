import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadPhotosActionCreator } from "../../store/features/photosSlice";
import usePhotosApi from "../../hooks/usePhotosApi";
import {
  hideLoadingActionsCreator,
  showLoadingActionsCreator,
} from "../../store/ui/uiSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PageStyled from "../PageStyled";
import PhotosList from "../../components/PhotosList/PhotosList";

const HomePage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { getPhotosApi } = usePhotosApi();

  useEffect(() => {
    (async () => {
      try {
        dispatch(showLoadingActionsCreator());
        const photos = await getPhotosApi();
        dispatch(loadPhotosActionCreator(photos.photos));
      } catch (error) {
        toast.error("Error! Something went wrong. Try again!", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: "toast toast-error",
        });

        dispatch(hideLoadingActionsCreator());
      }
    })();
  }, [dispatch, getPhotosApi]);

  return (
    <PageStyled className="data">
      <section className="data__article">
        <h1 className="data__title">Street photography</h1>
        <p className="data__text">
          Is the photographic gender that takes place in the public space,
          within the ordinary life.
        </p>
        <p className="data__text">
          Sometimes extraordinary and spontaneous things occur in daily life
          basis and the photographer has to be a good observer and fast reacting
          with the camera to take a record of that moment.
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
    </PageStyled>
  );
};

export default HomePage;
