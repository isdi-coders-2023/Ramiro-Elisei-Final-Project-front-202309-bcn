import { toast } from "react-toastify";
import {
  ActivitiesPageStyle,
  ContentContainerStyle,
} from "./ActivitiesPageStyle";
import ActivitiesList from "../../components/ActivitiesList/ActivitiesList";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import useActivitiesApi from "../../hooks/useActivitiesApi";
import { loadActivitiesActionCreator } from "../../store/features/activities/activitiesSlice";
import { hideLoadingActionCreator } from "../../store/features/ui/uiSlice";

const ActivitiesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { getActivities } = useActivitiesApi();

  useEffect(() => {
    (async () => {
      try {
        const { activities } = await getActivities();

        dispatch(loadActivitiesActionCreator(activities));
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error(
          "I apologize, but we were unable to retrieve the activities.",
          {
            className: "toast toast--unsuccess",
            position: toast.POSITION.TOP_CENTER,
          },
        );
      }
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
