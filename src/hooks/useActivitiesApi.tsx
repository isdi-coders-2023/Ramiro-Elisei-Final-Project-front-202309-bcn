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

  return { getActivities };
};

export default useActivitiesApi;
