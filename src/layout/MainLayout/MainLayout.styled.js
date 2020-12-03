import styled from "styled-components";

export const StyledMainLayout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.lightBlack};

  ${({ theme }) => theme.media.l} {
    align-items: flex-start;
    padding: 20px 0 0 0;
  }
`;
