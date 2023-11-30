import { ActivityStructure } from "../../store/features/activities/types";
import ActivitiesListStyle from "./ActivitiesListStyle";

interface ActivitiesListProps {
  activities: ActivityStructure[];
}

const ActivitiesList = ({ activities }: ActivitiesListProps) => {
  return (
    <ActivitiesListStyle>
      <h1 className="list__title">activities</h1>
      <span className="list__date">dic 27 - 26</span>
      <span className="list__date">2023</span>

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
