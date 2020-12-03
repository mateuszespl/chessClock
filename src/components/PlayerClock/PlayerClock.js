import React from "react";
import { StyledPlayerClock } from "./PlayerClock.styled";

export const PlayerClock = ({ player, isMyTurn, timeLeft, isWhite }) => {
  const { minutes, seconds } = timeLeft;
  return (
    <StyledPlayerClock isWhite={isWhite}>
      <header className={isWhite && "white"}>
        <h1>{player}</h1>
      </header>
      <div>
        <span>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
    </StyledPlayerClock>
  );
};
