import styled from "styled-components";

export const StyledForm = styled.div`
  position: relative;
  height: 65vh;
  width: 350px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 30px;
  border: 2px solid black;
  overflow: hidden;

  .form {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &__inputWrapper {
      width: 100%;
      height: 50px;
      margin: 30px 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        align-self: flex-start;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: ${({ theme }) => theme.fonts.s};
        margin: 0 0 5px 5px;
      }

      input[type="text"] {
        all: unset;
        border: 2px solid black;
        border-radius: 15px;
        height: 100%;
        width: 250px;
        margin: 0 auto;
        padding: 15px 10px;
        font-size: ${({ theme }) => theme.fonts.m};
        background: ${({ theme }) => theme.colors.white};
      }

      input[type="range"] {
        width: 100%;
      }

      &:last-of-type {
        height: unset;
      }
    }

    &__clock {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background: white;
      border: 2px solid ${({ theme }) => theme.colors.primaryAccent};
      margin: 10px 0 0 0;
      position: relative;

      span {
        background: ${({ theme }) => theme.colors.primaryAccent};
        position: absolute;
        width: 45%;
        height: 2px;
        top: calc(50% - 1px);
        transform: ${({ playtime }) =>
          playtime && `rotate(${playtime * 6 - 90}deg)`};
        left: 50%;
        transform-origin: 0 100%;
        transition: transform 0.1s;
      }

      p {
        position: absolute;
        top: 50%;
        left: -100%;
        transform: translateY(-50%);
      }
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 10px;
      text-transform: uppercase;
      background: ${({ theme }) => theme.colors.primaryAccent};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bolder;
    }
  }
`;
