import styled from "styled-components";

const ActivitiesListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-left: ${({ theme }) => theme.paddingSide};
  padding-right: ${({ theme }) => theme.paddingSide};
  gap: 44px;
`;

export default ActivitiesListStyle;
