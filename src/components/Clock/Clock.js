import React, { useEffect, useState } from "react";
import PlayerClock from "../PlayerClock";

import { StyledClock } from "./Clock.styled";

export const Clock = ({ players, playtime }) => {
  const { firstPlayer, secondPlayer } = players;
  const [currentGame, setCurrentGame] = useState({
    isFirstPlayerTurn: true,
    firstPlayerTimeLeft: playtime,
    secondPlayerTimeLeft: playtime,
    isPaused: false,
  });

  const {
    isPaused,
    firstPlayerTimeLeft,
    secondPlayerTimeLeft,
    isFirstPlayerTurn,
  } = currentGame;

  // const handleTimeChange = () => {
  //   setCurrentGame({
  //     ...currentGame,
  //     firstPlayerTimeLeft: firstPlayerTimeLeft - 1,
  //   });
  // };

  useEffect(() => {
    if (!currentGame.isPaused) {
      // setInterval(handleTimeChange, 1000);
    } else {
    }
  }, [currentGame.isPaused]);
  return (
    <StyledClock>
      <PlayerClock
        timeLeft={firstPlayerTimeLeft}
        isMyTurn={isFirstPlayerTurn && true}
        player={firstPlayer}
      />
      <PlayerClock
        timeLeft={secondPlayerTimeLeft}
        isMyTurn={!isFirstPlayerTurn && true}
        player={secondPlayer}
      />
    </StyledClock>
  );
};