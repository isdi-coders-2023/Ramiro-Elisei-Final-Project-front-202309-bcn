import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import activitiesMockData from "../../mocks/activitiesMock";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<ActivitiesList activities={activitiesMockData} />}
        />
      </Routes>
    </>
  );
};

export default App;
