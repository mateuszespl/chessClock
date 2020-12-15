import styled from "styled-components";

export const StyledClockControls = styled.div`
  position: absolute;
  bottom: -120px;
  width: 100%;
  justify-content: space-around;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:nth-of-type(2) {
      width: 100%;
      max-width: 490px;
      margin: 0 10px;

      button {
        width: 100%;
      }
    }

    button {
      all: unset;
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.keyboard};
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: bolder;
      font-size: ${({ theme }) => theme.fonts.l};
      border-radius: 10px;
      height: 70px;
      width: 70px;
      cursor: pointer;
      box-shadow: 0 0 20px -5px ${({ theme }) => theme.colors.shadow};
      transition: transform 0.2s;

      &:active {
        transform: scale(1.1);
      }
    }

    p {
      margin: 5px 0 0 0;
      color: ${({ theme }) => theme.colors.white};
    }

    ${({ theme }) => theme.media.m} {
      button {
        width: 50px;
        height: 50px;
        font-size: ${({ theme }) => theme.fonts.m};
      }
    }

    ${({ theme }) => theme.media.l} {
      bottom: -120px;
    }
  }

  ${({ theme }) => theme.media.m} {
    bottom: -80px;
  }
`;
