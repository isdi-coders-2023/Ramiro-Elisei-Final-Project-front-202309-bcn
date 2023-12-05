import { useAppSelector } from "../../store/hooks";
import ActivityCard from "../ActivityCard/ActivityCard";
import ActivitiesListStyle from "./ActivitiesListStyle";

const ActivitiesList = (): React.ReactElement => {
  const activities = useAppSelector((state) => state.activities.activities);

  return (
    <ActivitiesListStyle>
      {activities.map((activity) => (
        <li key={activity._id}>
          <ActivityCard activity={activity} />
        </li>
      ))}
    </ActivitiesListStyle>
  );
};

export default ActivitiesList;
