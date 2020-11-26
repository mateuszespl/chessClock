import React from "react";

import { StyledForm } from "./Form.styled";

export const Form = ({
  playtime,
  setPlaytime,
  players,
  setPlayers,
  isSubmitted,
  setIsSubmitted,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };
  const handleChange = (e) => {
    const { value, id } = e.currentTarget;
    if (id === "first") {
      setPlayers({ secondPlayer, firstPlayer: value });
    } else if (id === "second") {
      setPlayers({ firstPlayer, secondPlayer: value });
    }
  };
  const { firstPlayer, secondPlayer } = players;
  return (
    <StyledForm playtime={playtime}>
      <form className="form">
        <div className="form__inputWrapper">
          <p>Gracz pierwszy</p>
          <input
            id="first"
            type="text"
            placeholder="Wpisz imię pierwszego gracza."
            value={firstPlayer}
            onChange={handleChange}
          />
        </div>
        <div className="form__inputWrapper">
          <p>Gracz drugi</p>
          <input
            type="text"
            id="second"
            placeholder="Wpisz imię drugiego gracza."
            value={secondPlayer}
            onChange={(e) =>
              setPlayers({ firstPlayer, secondPlayer: e.currentTarget.value })
            }
          />
        </div>
        <div className="form__inputWrapper">
          <p>Ile czasu ma trwać rozgrywka?</p>
          <input
            min="0"
            max="60"
            step="1"
            value={playtime}
            onChange={(e) => setPlaytime(e.currentTarget.value)}
            type="range"
          />
          <div className="form__clock">
            <span></span>
            <p>{playtime}min</p>
          </div>
        </div>
        <button onClick={handleClick}>Rozpocznij partię</button>
      </form>
    </StyledForm>
  );
};
