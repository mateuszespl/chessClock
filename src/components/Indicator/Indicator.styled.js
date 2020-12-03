import styled from "styled-components";

export const StyledIndicator = styled.div`
  position: absolute;
  background: ${({ isFirstPlayerTurn, theme }) =>
    isFirstPlayerTurn ? theme.colors.black : theme.colors.white};
  top: 50px;
  padding: 10px 20px;
  border-radius: ${({ isFirstPlayerTurn }) =>
    isFirstPlayerTurn ? "20px 0 0 20px" : "0 20px 20px 0"};
  text-transform: uppercase;
  font-weight: bolder;
  color: ${({ theme, isFirstPlayerTurn }) =>
    isFirstPlayerTurn ? theme.colors.white : theme.colors.black};
  transform: ${({ isFirstPlayerTurn }) =>
    isFirstPlayerTurn ? "translateX(-49%)" : "translateX(49%)"};
  transition: transform 0.1s;

  ${({ theme }) => theme.media.l} {
    top: 50%;
    transform: ${({ isFirstPlayerTurn }) =>
      isFirstPlayerTurn ? "translateY(-100%)" : "translateY(0%)"};
    border-radius: ${({ isFirstPlayerTurn }) =>
      isFirstPlayerTurn ? "20px 20px 0 0" : "0 0 20px 20px"};
  }
`;
