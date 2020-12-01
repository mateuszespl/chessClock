import React, { useState } from "react";

import useInterval from "../../hooks/useInterval";
import ClockControls from "../ClockControls";
import Indicator from "../Indicator";
import PlayerClock from "../PlayerClock";
import { StyledClock } from "./Clock.styled";

export const Clock = ({ players, playtime }) => {
  const [currentGame, setCurrentGame] = useState({
    isFirstPlayerTurn: true,
    firstPlayerTimeLeft: { minutes: playtime, seconds: 0 },
    secondPlayerTimeLeft: { minutes: playtime, seconds: 0 },
    isPaused: true,
    isStarted: false,
  });

  const { firstPlayer, secondPlayer } = players;
  const {
    isPaused,
    firstPlayerTimeLeft,
    secondPlayerTimeLeft,
    isFirstPlayerTurn,
    isStarted,
  } = currentGame;

  const handleTimeChange = () => {
    if (isFirstPlayerTurn && !isPaused) {
      const { minutes, seconds } = firstPlayerTimeLeft;

      if (seconds === 0) {
        setCurrentGame({
          ...currentGame,
          firstPlayerTimeLeft: { minutes: minutes - 1, seconds: 59 },
        });
      } else {
        setCurrentGame({
          ...currentGame,
          firstPlayerTimeLeft: { ...firstPlayerTimeLeft, seconds: seconds - 1 },
        });
      }
    } else if (!isFirstPlayerTurn && !isPaused) {
      const { minutes, seconds } = secondPlayerTimeLeft;

      if (seconds === 0) {
        setCurrentGame({
          ...currentGame,
          secondPlayerTimeLeft: { minutes: minutes - 1, seconds: 59 },
        });
      } else {
        setCurrentGame({
          ...currentGame,
          secondPlayerTimeLeft: {
            ...secondPlayerTimeLeft,
            seconds: seconds - 1,
          },
        });
      }
    } else console.log("Pauza");
  };
  useInterval(handleTimeChange, isPaused ? null : 1000);

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
      <Indicator isFirstPlayerTurn={isFirstPlayerTurn} isStarted={isStarted} />
    </StyledClock>
  );
};
