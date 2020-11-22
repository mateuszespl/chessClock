import React from "react";

import { StyledForm } from "./Form.styled";

export const Form = () => {
  return (
    <StyledForm>
      <form>
        <div class="form__inputWrapper">
          <p>Gracz pierwszy</p>
          <input type="text" placeholder="Wpisz imię pierwszego gracza." />
        </div>
        <div class="form__inputWrapper">
          <p>Gracz drugi</p>
          <input type="text" placeholder="Wpisz imię drugiego gracza." />
        </div>
        <div class="form__inputWrapper">
          <p>Ile czasu ma trwać rozgrywka?</p>
          <input min="1" max="60" step="1" type="range" />
        </div>
        <button>Rozpocznij partię</button>
      </form>
    </StyledForm>
  );
};
