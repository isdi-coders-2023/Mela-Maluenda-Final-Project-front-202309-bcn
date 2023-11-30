import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={""} />
      </Routes>
    </main>
  );
};

export default App;
