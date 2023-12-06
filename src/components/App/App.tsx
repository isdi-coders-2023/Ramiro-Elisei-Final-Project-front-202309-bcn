import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import ActivitiesPage from "../../pages/ActivitiesPage/ActivitiesPage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ActivitiesPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
