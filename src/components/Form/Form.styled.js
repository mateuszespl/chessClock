import styled from "styled-components";

export const StyledForm = styled.div`
  position: relative;
  height: 75vh;
  width: 350px;
  border-radius: 40px;
  padding: 30px;
  border: 2px solid black;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.darkWhite};
  box-shadow: 0 0 20px -5px ${({ theme }) => theme.colors.shadow};

  header {
    h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fonts.xl};
    }
  }

  .form {
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &__inputWrapper {
      width: 100%;
      height: 50px;
      margin: 25px 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &:first-of-type {
        margin: 35px 0 25px 0;
      }

      p {
        align-self: flex-start;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: ${({ theme }) => theme.fonts.s};
        margin: 0 0 5px 15px;
      }

      input[type="text"] {
        all: unset;
        border: 2px solid black;
        border-radius: 25px;
        height: 100%;
        width: 250px;
        margin: 0 auto;
        padding: 13px 15px;
        font-size: ${({ theme }) => theme.fonts.m};
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.black};
      }

      input[type="range"] {
        width: 250px;
        margin: 5px 0 0 0;
      }

      &:last-of-type {
        height: unset;
      }
    }

    &__clock {
      h2 {
        font-size: ${({ theme }) => theme.fonts.xxl};
        color: ${({ theme }) => theme.colors.white};

        span {
          font-size: ${({ theme }) => theme.fonts.m};
        }
      }
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-weight: bolder;
      position: relative;
      overflow: hidden;
      transition: color 0.15s;

      &::after {
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.white};
        display: block;
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        transition: left 0.2s;
        z-index: -1;
      }

      &:hover {
        color: black;

        &::after {
          left: 0;
        }
      }
    }
  }

  img {
    position: absolute;
    top: -10px;
    left: -305px;
    transform: rotate(-30deg);
  }
`;
