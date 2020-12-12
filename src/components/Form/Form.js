import React from "react";

import { StyledForm } from "./Form.styled";

export const Form = ({
  playtime,
  setPlaytime,
  players,
  setPlayers,
  isSubmitted,
  setIsSubmitted,
  setModalSettings,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const { firstPlayer, secondPlayer } = players;
    if (firstPlayer && secondPlayer) {
      setIsSubmitted(!isSubmitted);
    } else
      setModalSettings({
        isVisible: true,
        message: "You have to choose name for players!",
      });
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
      <header>
        <h1>
          Chess
          <br />
          Time... er!
        </h1>
      </header>
      <form className="form">
        <div className="form__inputWrapper">
          <p>Gracz pierwszy</p>
          <input
            id="first"
            type="text"
            placeholder="Białe piony."
            value={firstPlayer}
            onChange={handleChange}
          />
        </div>
        <div className="form__inputWrapper">
          <p>Gracz drugi</p>
          <input
            type="text"
            id="second"
            placeholder="Czarne piony."
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
            <h2>
              {playtime}
              <span>min</span>
            </h2>
          </div>
        </div>
        <button type="submit" onClick={handleClick}>
          Rozpocznij partię
        </button>
      </form>
      <img
        src="https://image.flaticon.com/icons/png/512/32/32386.png"
        alt="king"
      />
    </StyledForm>
  );
};
