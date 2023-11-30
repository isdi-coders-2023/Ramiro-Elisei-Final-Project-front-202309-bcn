import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: ${({ theme }) => theme.paddingSide};
  padding-right: ${({ theme }) => theme.paddingSide};
  padding-top: ${({ theme }) => theme.paddingTop};
`;

export default HeaderStyled;
