import styled from "styled-components";

export const StyledForm = styled.div`
  height: 60vh;
  width: 400px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 30px;
  border: 2px solid black;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .form__inputWrapper {
    width: 100%;
    height: 50px;
    margin: 20px 0;
    position: relative;

    p {
      text-transform: uppercase;
      font-weight: bolder;
    }

    input[type="text"] {
      all: unset;
      border: 2px solid black;
      border-radius: 10px;
      height: 100%;
      width: 100%;
      padding: 0 10px;
      font-size: ${({ theme }) => theme.fonts.m};
    }

    input[type="range"] {
      width: 100%;
    }
  }
`;
