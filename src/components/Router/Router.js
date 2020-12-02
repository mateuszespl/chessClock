import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "../../views/Game";
import Home from "../../views/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
};
