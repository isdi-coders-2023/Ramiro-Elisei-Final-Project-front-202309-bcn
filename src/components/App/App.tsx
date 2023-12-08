import "react-toastify/dist/ReactToastify.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import ActivitiesPage from "../../pages/ActivitiesPage/ActivitiesPage";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/hooks";
import ToastifyStyled from "../Toastify/ToastifyStyled";
import ActivitiesFormPage from "../../pages/ActivitiesFormPage/ActivitiesFormPage";

const App = (): React.ReactElement => {
  const isLoading = useAppSelector((state) => state.uiState.isLoading);
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <ToastifyStyled />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<ActivitiesPage />} />
          <Route path="/" element={<Navigate to="/add" />} />
          <Route path="/add" element={<ActivitiesFormPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
