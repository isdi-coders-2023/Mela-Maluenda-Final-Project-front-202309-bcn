import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";

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
        </Routes>
      </main>
    </>
  );
};

export default App;
