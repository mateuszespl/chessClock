import styled from "styled-components";

export const StyledPlayerClock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;

  header {
    margin: 0 0 20px 0;

    h1 {
      font-size: ${({ theme }) => theme.fonts.xl};
      color: ${({ theme, isWhite }) =>
        isWhite ? theme.colors.black : theme.colors.white};
    }
  }

  div {
    span {
      font-size: ${({ theme }) => theme.fonts.clock};
      font-weight: bolder;
      color: ${({ theme, isWhite }) =>
        isWhite ? theme.colors.black : theme.colors.white};
    }
  }
`;
