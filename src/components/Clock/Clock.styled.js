import styled from "styled-components";

export const StyledClock = styled.div`
  position: relative;
  height: 65vh;
  width: 80vw;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 30px;
  border: 2px solid black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
