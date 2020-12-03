import React, { useCallback, useEffect } from "react";

import { StyledClockControls } from "./ClockControls.styled";

export const ClockControls = ({
  currentGame,
  setCurrentGame,
  setIsSubmitted,
}) => {
  const { isPaused, isFirstPlayerTurn, isStarted } = currentGame;

  const handleKeyPress = useCallback(
    (e) => {
      const { key } = e;

      if (key === "p") {
        setCurrentGame({
          ...currentGame,
          isPaused: !isPaused,
          isStarted: true,
        });
      } else if (key === "r") {
      } else if (key === " ") {
        if (isStarted && !isPaused) {
          setCurrentGame({
            ...currentGame,
            isFirstPlayerTurn: !isFirstPlayerTurn,
          });
        }
      }
    },
    [currentGame, isFirstPlayerTurn, isPaused, setCurrentGame, isStarted]
  );

  const handleClick = () => {
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (!isStarted) {
      window.addEventListener("keypress", handleKeyPress);
    }
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [handleKeyPress, isStarted]);
  return (
    <StyledClockControls>
      <div>
        <button
          id="P"
          onClick={() =>
            setCurrentGame({
              ...currentGame,
              isPaused: !isPaused,
              isStarted: true,
            })
          }
        >
          P
        </button>
        <p>{!isStarted ? "Play" : isPaused ? "Resume" : "Pause"}</p>
      </div>
      <div>
        <button
          id="Spacebar"
          onClick={() =>
            isStarted &&
            !isPaused &&
            setCurrentGame({
              ...currentGame,
              isFirstPlayerTurn: !isFirstPlayerTurn,
            })
          }
        >
          Spacebar
        </button>
        <p>End of my turn</p>
      </div>
      <div>
        <button onClick={handleClick} id="R">
          R
        </button>
        <p>Restart</p>
      </div>
    </StyledClockControls>
  );
};
