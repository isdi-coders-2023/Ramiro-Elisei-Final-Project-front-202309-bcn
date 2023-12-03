import axios from "axios";
import { useCallback } from "react";
import { ActivityStructure } from "../store/features/activities/types";

const useActivitiesApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  const getActivities = useCallback(async () => {
    const { data: activities } = await axios.get<{
      activities: ActivityStructure[];
    }>("/activities");
    return activities;
  }, []);

  return { getActivities };
};

export default useActivitiesApi;
