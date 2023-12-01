import ActivitiesPageStyle from "./ActivitiesPageStyle";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import activitiesMockData from "../../mocks/activitiesMock";
import { useEffect } from "react";
import { loadActivitiesActionCreator } from "../../store/features/activities/activitiesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const ActivitiesPage = (): React.ReactElement => {
  const activitiesState = useAppSelector(
    (activity) => activity.activitiesState,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadActivitiesActionCreator(activitiesMockData));
    })();
  }, [dispatch]);

  return (
    <>
      <ActivitiesPageStyle>
        <h1 className="page__title">activities</h1>
        <span className="page__date">dic 27 - 26</span>
        <span className="page__date">2023</span>
      </ActivitiesPageStyle>
      <ActivitiesList activities={activitiesState.activities} />
    </>
  );
};

export default ActivitiesPage;
