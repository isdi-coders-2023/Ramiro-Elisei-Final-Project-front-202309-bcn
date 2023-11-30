import styled from "styled-components";

const NavigationStyled = styled.nav`
  text-align: right;

  .navigation {
    &__element {
      padding-bottom: 8px;
    }
    &__navlink {
      text-transform: uppercase;
      font-size: 15px;
    }
  }

  .active {
    padding-bottom: 1px;
    border-bottom: dashed 2px ${({ theme }) => theme.color.main};
  }
`;

export default NavigationStyled;
