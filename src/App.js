import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Modal } from "./components/Modal/Modal";

import MainLayout from "./layout/MainLayout";
import { Game } from "./views/Game/Game";
import { Home } from "./views/Home/Home";

export const App = () => {
  const [playtime, setPlaytime] = useState(15);
  const [players, setPlayers] = useState({ firstPlayer: "", secondPlayer: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  return (
    <MainLayout>
      {/* Meta */}
      <Helmet>
        <title>Chess Clock - try it out!</title>
      </Helmet>
      {/* Views */}
      {isSubmitted &&
      players.firstPlayer !== "" &&
      players.secondPlayer !== "" ? (
        <Game
          playtime={playtime}
          players={players}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <Home
          playtime={playtime}
          players={players}
          setPlaytime={setPlaytime}
          setPlayers={setPlayers}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      )}
      {isModalVisible && (
        <Modal setIsModalVisible={setIsModalVisible} message="Modal" />
      )}
    </MainLayout>
  );
};

export default App;
