import styled from "styled-components";

export const StyledClock = styled.div`
  position: relative;
  height: 65vh;
  width: 80vw;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.white} 0%, ${theme.colors.white} 50%, ${theme.colors.black} 50%, ${theme.colors.black} 100%)`};
  box-shadow: 0 0 20px -5px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.darkWhite};
  border-radius: 35px;
  padding: 30px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${({ theme }) => theme.media.xl} {
    width: 95vw;
  }

  ${({ theme }) => theme.media.l} {
    height: 75vh;
    width: 80vw;
    flex-direction: column;
    background: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.colors.white} 0%, ${theme.colors.white} 50%, ${theme.colors.black} 50%, ${theme.colors.black} 100%)`};
  }
`;
