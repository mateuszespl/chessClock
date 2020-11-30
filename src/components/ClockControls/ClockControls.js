import React from "react";

import { StyledClockControls } from "./ClockControls.styled";

export const ClockControls = ({ currentGame, setCurrentGame }) => {
  const { isPaused } = currentGame;
  return (
    <StyledClockControls>
      <button
        onClick={() => setCurrentGame({ ...currentGame, isPaused: !isPaused })}
      >
        {isPaused ? "Wznów" : "Pauza"}{" "}
      </button>
      <button>Start</button>
    </StyledClockControls>
  );
};
