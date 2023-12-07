import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const ToastifyStyled = styled(ToastContainer)`
  .toast {
    color: ${({ theme }) => theme.color.secondary};

    &--success {
      background-color: ${({ theme }) => theme.color.successfull};
    }

    &--unsuccess {
      background-color: ${({ theme }) => theme.color.unSuccessfull};
    }
  }

  .Toastify__progress-bar {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  .Toastify__close-button {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export default ToastifyStyled;
