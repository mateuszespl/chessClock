import React from "react";

import { StyledClockControls } from "./ClockControls.styled";

export const ClockControls = ({ currentGame, setCurrentGame }) => {
  const { isPaused, isFirstPlayerTurn } = currentGame;
  return (
    <StyledClockControls>
      <button
        onClick={() => setCurrentGame({ ...currentGame, isPaused: !isPaused })}
      >
        {isPaused ? "Wznów" : "Pauza"}{" "}
      </button>
      <button
        onClick={() =>
          setCurrentGame({
            ...currentGame,
            isFirstPlayerTurn: !isFirstPlayerTurn,
          })
        }
      >
        Koniec ruchu {isFirstPlayerTurn ? "białych" : "czarnych"}
      </button>
    </StyledClockControls>
  );
};
