import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import activitiesMockData from "../../mocks/activitiesMock";
import ActivitiesPageStyle from "./ActivitiesPageStyle";

const ActivitiesPage = (): React.ReactElement => {
  return (
    <>
      <ActivitiesPageStyle>
        <h1 className="page__title">activities</h1>
        <span className="page__date">dic 27 - 26</span>
        <span className="page__date">2023</span>
      </ActivitiesPageStyle>
      <ActivitiesList activities={activitiesMockData} />
    </>
  );
};

export default ActivitiesPage;
