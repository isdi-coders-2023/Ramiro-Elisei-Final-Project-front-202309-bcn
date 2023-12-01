import { ActivityStructure } from "../../store/features/activities/types";
import ActivityCardStyled from "./ActivityCardStyle";

interface ActivityCardProps {
  activity: ActivityStructure;
}

const ActivityCard = ({
  activity: { imageSmallUrl, activityType, activityName, ledBy },
}: ActivityCardProps): React.ReactElement => {
  return (
    <ActivityCardStyled className="activity-card">
      <img
        className="activity-card__picture"
        src={imageSmallUrl}
        alt={activityName}
        width="288"
        height="197"
      />
      <div className="activity-card__panel">
        <img
          className="diamond"
          alt="diamon icon"
          src="icons/diamond.svg"
          width="13"
          height="13"
        ></img>
        <span className="activity-card__type">{activityType}</span>
      </div>
      <h2 className="activity-card__name">{activityName}</h2>
      <span className="activity-card__led">{ledBy}</span>
    </ActivityCardStyled>
  );
};

export default ActivityCard;
