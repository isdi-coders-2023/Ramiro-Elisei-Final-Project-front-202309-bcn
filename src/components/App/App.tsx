import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import ActivitiesPage from "../../pages/ActivitiesPage/ActivitiesPage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ActivitiesPage />} />
      </Routes>
    </>
  );
};

export default App;
