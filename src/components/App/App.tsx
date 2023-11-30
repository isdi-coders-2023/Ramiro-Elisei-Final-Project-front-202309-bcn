import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
