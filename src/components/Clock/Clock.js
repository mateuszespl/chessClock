import React, { useEffect, useState } from "react";

import ClockControls from "../ClockControls";
import PlayerClock from "../PlayerClock";
import { StyledClock } from "./Clock.styled";

export const Clock = ({ players, playtime }) => {
  const { firstPlayer, secondPlayer } = players;
  const [currentGame, setCurrentGame] = useState({
    isFirstPlayerTurn: true,
    firstPlayerTimeLeft: { minutes: playtime, seconds: 0 },
    secondPlayerTimeLeft: { minutes: playtime, seconds: 0 },
    isPaused: false,
  });

  const {
    isPaused,
    firstPlayerTimeLeft,
    secondPlayerTimeLeft,
    isFirstPlayerTurn,
  } = currentGame;

  // const handleTimeChange = () => {
  //   const { minutes, seconds } = firstPlayerTimeLeft;
  //   setCurrentGame({
  //     ...currentGame,
  //     firstPlayerTimeLeft: { ...minutes, seconds: seconds - 1 },
  //   });
  // };

  useEffect(() => {
    if (!currentGame.isPaused) {
      // setInterval(handleTimeChange, 1000);
    } else {
    }
  }, [currentGame]);
  return (
    <StyledClock>
      <PlayerClock
        isWhite
        timeLeft={firstPlayerTimeLeft}
        isMyTurn={isFirstPlayerTurn && true}
        player={firstPlayer}
      />
      <PlayerClock
        timeLeft={secondPlayerTimeLeft}
        isMyTurn={!isFirstPlayerTurn && true}
        player={secondPlayer}
      />
      <ClockControls
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
      />
    </StyledClock>
  );
};
