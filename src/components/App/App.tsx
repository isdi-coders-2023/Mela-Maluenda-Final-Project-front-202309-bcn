import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPage from "../../pages/AddPage/AddPage";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import Footer from "../Footer/Footer";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import UpdatePage from "../../pages/UpdatePage/UpdatePage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-photo" element={<AddPage />} />
          <Route path="/details/:photoId" element={<DetailsPage />} />
          <Route path="/update/:photoId" element={<UpdatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={6500}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
