import React from "react";
import { StyledPlayerClock } from "./PlayerClock.styled";

export const PlayerClock = ({ player, isMyTurn, timeLeft }) => {
  return (
    <StyledPlayerClock>
      Gracz:{player}
      <br />
      Pozostały czas: {timeLeft}
      <br />
      Moja kolej: {isMyTurn ? "tak" : "nie"}
    </StyledPlayerClock>
  );
};
