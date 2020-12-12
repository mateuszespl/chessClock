import React from "react";
import { StyledModal } from "./Modal.styled";

export const Modal = ({ modalSettings, setModalSettings }) => {
  const { message } = modalSettings;
  return (
    <StyledModal>
      <div>
        <p>{message}</p>
        <button
          onClick={() => setModalSettings({ isVisible: false, ...message })}
        >
          Dismiss
        </button>
      </div>
    </StyledModal>
  );
};
