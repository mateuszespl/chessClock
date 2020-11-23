import React, { useState } from "react";

import { StyledForm } from "./Form.styled";

export const Form = () => {
  const [playtime, setPlaytime] = useState(15);
  const [players, setPlayers] = useState({ firstPlayer: "", secondPlayer: "" });
  const { firstPlayer, secondPlayer } = players;
  return (
    <StyledForm playtime={playtime}>
      <form class="form">
        <div class="form__inputWrapper">
          <p>Gracz pierwszy</p>
          <input
            type="text"
            placeholder="Wpisz imię pierwszego gracza."
            value={firstPlayer}
            onChange={(e) =>
              setPlayers({ secondPlayer, firstPlayer: e.currentTarget.value })
            }
          />
        </div>
        <div class="form__inputWrapper">
          <p>Gracz drugi</p>
          <input
            type="text"
            placeholder="Wpisz imię drugiego gracza."
            value={secondPlayer}
            onChange={(e) =>
              setPlayers({ firstPlayer, secondPlayer: e.currentTarget.value })
            }
          />
        </div>
        <div class="form__inputWrapper">
          <p>Ile czasu ma trwać rozgrywka?</p>
          <input
            min="0"
            max="60"
            step="1"
            value={playtime}
            onChange={(e) => setPlaytime(e.currentTarget.value)}
            type="range"
          />
          <div class="form__clock">
            <span></span>
            <p>{playtime}min</p>
          </div>
        </div>
        <button>Rozpocznij partię</button>
      </form>
      <img
        src="https://www.transparentpng.com/thumb/chess/tCQTMR-chess-icon-clipart.png"
        alt="Chess Icon Clipart 16 @transparentpng.com"
      ></img>
    </StyledForm>
  );
};
