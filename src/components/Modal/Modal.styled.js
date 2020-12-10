import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.transparentBlack};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;
