import React from "react";

import Form from "../../components/Form";
import MainLayout from "../../layout/MainLayout";

export const Home = ({
  playtime,
  players,
  setPlaytime,
  setPlayers,
  isSubmitted,
  setIsSubmitted,
}) => {
  return (
    <MainLayout>
      <Form
        playtime={playtime}
        players={players}
        setPlaytime={setPlaytime}
        setPlayers={setPlayers}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
    </MainLayout>
  );
};
