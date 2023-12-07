import { toast } from "react-toastify";
import axios from "axios";
import { useCallback } from "react";
import {
  ActivitiesInitialStructure,
  ActivityStructure,
} from "../store/features/activities/types";
import { useDispatch } from "react-redux";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useActivitiesApi = () => {
  const dispatch = useDispatch();

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getActivities =
    useCallback(async (): Promise<ActivitiesInitialStructure> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data: activities } = await axios.get<{
          activities: ActivityStructure[];
        }>("/activities");

        dispatch(hideLoadingActionCreator());

        return activities;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        throw (error as Error).message;
      }
    }, [dispatch]);

  const deleteActivity = useCallback(
    async (activityId: string) => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`activities/delete/${activityId}`);

        toast.success("The activity was successfully deleted", {
          className: "toast toast--success",
          position: toast.POSITION.TOP_CENTER,
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Sorry, the activity could not be deleted", {
          className: "toast toast--unsuccess",
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    [dispatch],
  );

  return { getActivities, deleteActivity };
};

export default useActivitiesApi;
