import ActivityForm from "../../components/ActivityForm/ActivityForm";
import { PageStyle } from "../ActivitiesPage/PageStyle";

const ActivitiesFormPage = (): React.ReactElement => {
  return (
    <>
      <PageStyle>
        <h1 className="page__title">Add activity</h1>
        <ActivityForm />
      </PageStyle>
    </>
  );
};

export default ActivitiesFormPage;
