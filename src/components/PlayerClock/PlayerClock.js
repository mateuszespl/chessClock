import React from "react";
import { StyledPlayerClock } from "./PlayerClock.styled";

export const PlayerClock = ({ player, isMyTurn, timeLeft, isWhite }) => {
  const { minutes, seconds } = timeLeft;
  return (
    <StyledPlayerClock isWhite={isWhite}>
      <header>
        <h1>{"Player"}</h1>
      </header>
      <div>
        <span>
          {minutes}:{seconds < 10 ? `${seconds}0` : seconds}
        </span>
      </div>
      Moja kolej: {isMyTurn ? "tak" : "nie"}
    </StyledPlayerClock>
  );
};
