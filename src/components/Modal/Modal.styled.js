import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.transparentBlack};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 400px;
    height: 150px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 35px;

    p {
      font-size: ${({ theme }) => theme.fonts.l};
      font-weight: bolder;
    }

    button {
      all: unset;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 20px;
      border: 2px solid ${({ theme }) => theme.colors.black};
      background: ${({ theme }) => theme.colors.black};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      font-weight: bolder;
      position: relative;
      overflow: hidden;
    }
  }
`;
