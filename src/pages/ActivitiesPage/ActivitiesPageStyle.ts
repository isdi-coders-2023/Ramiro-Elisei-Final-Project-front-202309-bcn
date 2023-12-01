import styled from "styled-components";

const ActivitiesPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
  padding-left: ${({ theme }) => theme.paddingSide};
  padding-right: ${({ theme }) => theme.paddingSide};

  .page {
    &__title {
      font-size: 22px;
      text-transform: uppercase;
      padding-bottom: 22px;
    }

    &__date {
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`;

export default ActivitiesPageStyle;
