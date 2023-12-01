import { ActivityStructure } from "../../store/features/activities/types";
import ActivitiesListStyle from "./ActivitiesListStyle";

interface ActivitiesListProps {
  activities: ActivityStructure[];
}

const ActivitiesList = ({ activities }: ActivitiesListProps) => {
  return (
    <ActivitiesListStyle>
      {activities.map((activity) => (
        <li key={activity._id}>
          <h2>{activity.activityName}</h2>
          <img alt={activity.activityName}></img>
        </li>
      ))}
    </ActivitiesListStyle>
  );
};

export default ActivitiesList;
