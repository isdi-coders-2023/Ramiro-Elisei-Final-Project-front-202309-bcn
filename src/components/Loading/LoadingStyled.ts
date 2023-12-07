import styled from "styled-components";

const LoadingStyle = styled.div`
  position: relative;
  background-color: black;
  opacity: 0.8;
  position: fixed;
  inset: 0;

  .loading {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    .loader {
      color: #fff;
      position: relative;
      display: inline-block;
      margin-top: 20px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 4px;
      box-sizing: border-box;
    }

    .loader::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 24px;
      width: 5.15px;
      background: currentColor;
    }

    .loader::after {
      content: "";
      width: 8px;
      height: 8px;
      position: absolute;
      left: 125px;
      top: 2px;
      border-radius: 50%;
      background: #f0ce15;
      box-sizing: border-box;
      animation: animloader 1s ease-in infinite;
    }

    @keyframes animloader {
      0% {
        transform: translateY(8px) scaleY(1) scaleX(1.25);
      }
      25%,
      75% {
        transform: translateY(-5px) scaleY(1.2) scaleX(1);
      }
      50% {
        transform: translateY(-10px) scaleY(1) scaleX(1);
      }
      100% {
        transform: translateY(8px) scaleY(0.8) scaleX(0.8);
      }
    }
  }
`;

export default LoadingStyle;
