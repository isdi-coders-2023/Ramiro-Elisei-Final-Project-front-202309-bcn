import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: 50px;
  text-align: center;

  &.button--small {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
  }

  &.button--big {
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.secondary};
    font-size: 30px;
    font-weight: 400;
    width: 100%;
    height: 98.278px;
    flex-shrink: 0;
  }

  &.button--disable {
    background-color: ${({ theme }) => theme.color.disable};
  }

  &.button--solid {
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.secondary};
    padding: 12px 40px;
  }

  &.button--dotted {
    border: 2.5px dashed ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.main};
    padding: 9px 37px;
  }
`;

export default ButtonStyle;
