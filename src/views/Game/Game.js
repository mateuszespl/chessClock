import React from "react";

import Clock from "../../components/Clock";
import MainLayout from "../../layout/MainLayout";

export const Game = ({ playtime, players, setIsSubmitted }) => {
  return (
    <MainLayout>
      <Clock
        playtime={playtime}
        players={players}
        setIsSubmitted={setIsSubmitted}
      />
    </MainLayout>
  );
};
