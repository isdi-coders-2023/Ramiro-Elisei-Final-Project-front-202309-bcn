import axios from "axios";
import { useCallback } from "react";
import {
  ActivitiesInitialStructure,
  ActivityStructure,
} from "../store/features/activities/types";
import { useDispatch } from "react-redux";
import { showLowdingActionCreator } from "../store/features/ui/uiSlice";

const useActivitiesApi = () => {
  const dispatch = useDispatch();
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getActivities =
    useCallback(async (): Promise<ActivitiesInitialStructure> => {
      try {
        dispatch(showLowdingActionCreator());

        const { data: activities } = await axios.get<{
          activities: ActivityStructure[];
        }>("/activities");

        return activities;
      } catch (error) {
        throw (error as Error).message;
      }
    }, [dispatch]);

  return { getActivities };
};

export default useActivitiesApi;
