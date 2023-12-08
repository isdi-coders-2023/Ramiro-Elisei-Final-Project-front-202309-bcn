import Button from "../Button/Button";
import ActivityFormStyle from "./ActivityFormStyle";

const ActivityForm = (): React.ReactElement => {
  return (
    <ActivityFormStyle className="form">
      <div className="form__control">
        <label htmlFor="activity-type" className="form__label">
          Choose the activity type:
        </label>
        <select
          name="activity-type"
          id="activity-type"
          className="form__select"
          required
        >
          <option value="">Select activity type</option>
          <option value="workshop">Workshop</option>
          <option value="talks">Talks</option>
          <option value="corner">Corner</option>
          <option value="games">Games</option>
          <option value="classes">Classes</option>
        </select>
      </div>
      <div className="form__control">
        <label htmlFor="activity-name" className="form__label">
          Activity name:
        </label>
        <input
          type="text"
          id="activity-name"
          className="form__input"
          required
        />
      </div>
      <div className="form__control">
        <label htmlFor="activity-led" className="form__label">
          Led by:
        </label>
        <input type="text" id="activity-led" className="form__input" required />
      </div>
      <div className="form__control">
        <label htmlFor="activity-date" className="form__label">
          Activity date:
        </label>
        <input
          type="date"
          id="activity-date"
          name="activity-date"
          min="2023-01-01"
          max="2024-12-31"
          className="form__input"
          required
        />
      </div>
      <div className="form__control">
        <label htmlFor="activity-time" className="form__label">
          Start time:
        </label>
        <input
          type="time"
          id="activity-time"
          className="form__input"
          required
        />
      </div>
      <div className="form__control">
        <label htmlFor="activity-url" className="form__label">
          Add picture Url:
        </label>
        <input type="url" id="activity-url" className="form__input" required />
      </div>
      <div className="form__control">
        <label htmlFor="activity-url-small" className="form__label">
          Add small picture Url:
        </label>
        <input
          type="url"
          id="activity-url-small"
          className="form__input"
          required
        />
      </div>
      <div className="form__control">
        <label htmlFor="activity-description" className="form__label">
          Activity description:
        </label>
        <textarea
          id="activity-description"
          className="form__textarea"
          rows={10}
          cols={30}
          required
        />
      </div>
      <Button text="Add" type="submit" modifiers={["big"]} />
    </ActivityFormStyle>
  );
};

export default ActivityForm;
