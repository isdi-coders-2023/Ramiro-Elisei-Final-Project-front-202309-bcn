import styled from "styled-components";

const ActivityFormStyle = styled.form`
  margin: 0 auto;
  .form {
    &__control {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 32px;
    }

    &__label {
      font-size: 16px;
    }

    &__select {
      height: 43px;
      padding: 0 10px;
      font-size: 16px;
      background-color: ${({ theme }) => theme.color.disable};
      border-radius: 5px 0;
      max-width: 400px;
    }

    &__input {
      height: 43px;
      width: 288px;
      padding: 0 10px;
      font-size: 16px;
      flex-shrink: 0;
      border-radius: 5px 0;
      background-color: ${({ theme }) => theme.color.disable};
      border-bottom: dashed 2px ${({ theme }) => theme.color.main};
    }

    &__textarea {
      height: 211px;
      width: 288px;
      padding: 20px 10px;
      font-size: 16px;
      flex-shrink: 0;
      border-radius: 5px 0;
      background-color: ${({ theme }) => theme.color.disable};
      border-bottom: dashed 2px ${({ theme }) => theme.color.main};
      resize: none;
      margin-bottom: 65px;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.color.disable};
    }
  }
`;

export default ActivityFormStyle;
