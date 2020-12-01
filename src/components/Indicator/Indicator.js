import React from "react";

import { StyledIndicator } from "./Indicator.styled";

export const Indicator = ({ isFirstPlayerTurn }) => {
  return (
    <StyledIndicator isFirstPlayerTurn={isFirstPlayerTurn}>
      Twój ruch
    </StyledIndicator>
  );
};
