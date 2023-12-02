import styled from "styled-components";

const ActivityCardStyled = styled.article`
  display: flex;
  flex-direction: column;

  .activity-card {
    &__panel {
      margin: 18px 0 9px 0;
    }

    &__type {
      font-size: 16px;
      padding-left: 5px;
      margin-bottom: 58px;
    }

    &__name {
      font-size: 22px;
      margin-bottom: 4px;
    }

    &__led {
      font-size: 16px;
      margin-bottom: 25px;
    }

    &__toolbar {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export default ActivityCardStyled;
