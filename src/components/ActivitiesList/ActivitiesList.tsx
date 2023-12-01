import { ActivityStructure } from "../../store/features/activities/types";
import ActivityCard from "../ActivityCard/ActivityCard";
import ActivitiesListStyle from "./ActivitiesListStyle";

interface ActivitiesListProps {
  activities: ActivityStructure[];
}

const ActivitiesList = ({ activities }: ActivitiesListProps) => {
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
