import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Clock from "./components/Clock";
import Form from "./components/Form";
import { Modal } from "./components/Modal/Modal";
import MainLayout from "./layout/MainLayout";

export const App = () => {
  const [playtime, setPlaytime] = useState(15);
  const [players, setPlayers] = useState({ firstPlayer: "", secondPlayer: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalSettings, setModalSettings] = useState({
    isVisible: false,
    message: "",
  });
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
        <Clock
          playtime={playtime}
          players={players}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <Form
          setModalSettings={setModalSettings}
          playtime={playtime}
          players={players}
          setPlaytime={setPlaytime}
          setPlayers={setPlayers}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      )}
      {modalSettings.isVisible && (
        <Modal
          modalSettings={modalSettings}
          setModalSettings={setModalSettings}
        />
      )}
    </MainLayout>
  );
};

export default App;
