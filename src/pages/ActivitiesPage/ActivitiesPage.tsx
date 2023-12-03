import ActivitiesPageStyle from "./ActivitiesPageStyle";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import { useEffect } from "react";
import { getActivities } from "../../store/features/activities/activitiesSlice";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { ActivitiesInitialStructure } from "../../store/features/activities/types";
import { RootState } from "../../store";

const ActivitiesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { activities }: ActivitiesInitialStructure = useSelector(
    (state: RootState) => state.activities || { activities: [] },
  );

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <>
      <ActivitiesPageStyle>
        <h1 className="page__title">activities</h1>
        <span className="page__date">dic 27 - 26</span>
        <span className="page__date">2023</span>
      </ActivitiesPageStyle>
      <ActivitiesList activities={activities} />
    </>
  );
};

export default ActivitiesPage;
