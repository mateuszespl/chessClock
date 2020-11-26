import React, { useState } from "react";

import Clock from "./components/Clock";
import Form from "./components/Form";
import MainLayout from "./layout/MainLayout";

export const App = () => {
  const [playtime, setPlaytime] = useState(15);
  const [players, setPlayers] = useState({ firstPlayer: "", secondPlayer: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <MainLayout>
      {isSubmitted ? (
        <Clock playtime={playtime} players={players} />
      ) : (
        <Form
          playtime={playtime}
          players={players}
          setPlaytime={setPlaytime}
          setPlayers={setPlayers}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </MainLayout>
  );
};

export default App;
