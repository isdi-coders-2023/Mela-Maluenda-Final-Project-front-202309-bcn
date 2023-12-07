import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      {uiState.isLoading && <Loading />}
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
