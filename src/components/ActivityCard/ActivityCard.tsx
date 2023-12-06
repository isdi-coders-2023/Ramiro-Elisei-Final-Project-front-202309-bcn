import { ActivityStructure } from "../../store/features/activities/types";
import Button from "../Button/Button";
import ActivityCardStyled from "./ActivityCardStyle";
import { useAppDispatch } from "../../store/hooks";
import useActivitiesApi from "../../hooks/useActivitiesApi";
import { deleteActivityActionCreator } from "../../store/features/activities/activitiesSlice";

interface ActivityCardProps {
  activity: ActivityStructure;
}

const ActivityCard = ({ activity }: ActivityCardProps): React.ReactElement => {
  const { imageSmallUrl, activityType, activityName, ledBy, _id } = activity;

  const dispatch = useAppDispatch();
  const { deleteActivity } = useActivitiesApi();

  const deleteActivityById = (activityId: string) => {
    deleteActivity(activityId);
    dispatch(deleteActivityActionCreator(activityId));
  };

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
        />
        <span className="activity-card__type">{activityType}</span>
      </div>
      <h2 className="activity-card__name">{activityName}</h2>
      <span className="activity-card__led">{ledBy}</span>
      <div className="activity-card__toolbar">
        <Button text="Modify" type="button" modifiers={["small", "dotted"]} />
        <Button
          text="Delete"
          type="button"
          modifiers={["small", "solid"]}
          actionOnClick={() => deleteActivityById(_id)}
        />
      </div>
    </ActivityCardStyled>
  );
};

export default ActivityCard;
