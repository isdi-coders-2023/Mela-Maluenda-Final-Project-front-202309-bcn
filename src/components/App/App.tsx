import HomePage from "../../pages/HomePage/HomePage";
import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={""} />
      </Routes>
      <Header />
      <HomePage />
    </main>
  );
};

export default App;
