import {
  ActivitiesPageStyle,
  ContentContainerStyle,
} from "./ActivitiesPageStyle";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import useActivitiesApi from "../../hooks/useActivitiesApi";
import { loadActivitiesActionCreator } from "../../store/features/activities/activitiesSlice";

const ActivitiesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { getActivities } = useActivitiesApi();

  useEffect(() => {
    (async () => {
      const { activities } = await getActivities();

      dispatch(loadActivitiesActionCreator(activities));
    })();
  }, [dispatch, getActivities]);

  return (
    <>
      <ActivitiesPageStyle>
        <h1 className="page__title">activities</h1>
        <span className="page__date">dic 27 - 26</span>
        <span className="page__date">2023</span>
      </ActivitiesPageStyle>
      <ContentContainerStyle>
        <ActivitiesList />
      </ContentContainerStyle>
    </>
  );
};

export default ActivitiesPage;
